import { Injectable } from '@angular/core';
import { LeagueTypes, Player, Team, TeamWrapper } from './classes';
import { players, teams } from './fake-db';
import { DBTeam } from './dbInterfaces';

@Injectable({
  providedIn: 'root',
})
export class RostersService {
  cachedPlayers?: Player[];

  getPlayers(): Promise<Player[]> {
    if (this.cachedPlayers) {
      return Promise.resolve(this.cachedPlayers);
    }
    this.cachedPlayers = players;
    return Promise.resolve(players);
  }

  async getPlayersFiltered(filter: {
    id?: string;
    name?: string;
    overstat?: string;
    discord?: string;
  }): Promise<Player[]> {
    const allPlayers = await this.getPlayers();
    return allPlayers.filter((player) => {
      if (filter.id) {
        return player.id === filter.id;
      }
      let flag = true;
      // todo instead of just checking complete equality between names, check for substrings
      if (
        filter.name &&
        filter.name !== player.name &&
        !player.otherNames?.includes(filter.name)
      ) {
        flag = false;
      }
      if (filter.overstat && filter.overstat !== player.overstat) {
        flag = false;
      }
      if (filter.discord && filter.discord !== player.discord) {
        flag = false;
      }
      return flag;
    });
  }

  async getTeams<T extends number, N extends number>(
    minSize: T,
    maxSize: N,
  ): Promise<Team<T, N>[]> {
    const filteredTeams = teams.filter((team) => {
      const leagueTypeString: 'vesa' | 'vcs' = team.leagueType as
        | 'vesa'
        | 'vcs';
      const leagueType = LeagueTypes[leagueTypeString];
      return minSize === leagueType.min && maxSize === leagueType.max;
    });
    const mappedTeams: Team<T, N>[] = await Promise.all(
      filteredTeams.map(async (team) => await this.mapTeamFromDB(team)),
    );
    return Promise.resolve(mappedTeams);
  }

  async getTeamByID(id: string): Promise<TeamWrapper> {
    const filteredTeams = teams.filter((team) => team.id === id);
    const team = await this.mapTeamFromDB(filteredTeams[0]);
    return team;
  }

  // TODO need a typesound way of knowing leagueType min and max are equivalent to T and N
  // TODO instead of looping through current roster and former players and looping through all players in every iteration take all player id's from the two arrays and search for those players in O(n) on the players array
  async mapTeamFromDB<T extends number, N extends number>(
    team: DBTeam,
  ): Promise<Team<T, N>> {
    const leagueTypeString: 'vesa' | 'vcs' = team.leagueType as 'vesa' | 'vcs';
    const leagueType = LeagueTypes[leagueTypeString];
    const minSize: T = leagueType.min as T;
    const maxSize: N = leagueType.max as N;
    const formerPlayers: Player[] = await Promise.all(
      team.formerPlayers.map(async (player) => {
        const filteredPlayers = await this.getPlayersFiltered({
          id: player.id,
        });
        return filteredPlayers[0];
      }),
    );
    const roster: Player[] = await Promise.all(
      team.roster.map(async (player) => {
        const filteredPlayers = await this.getPlayersFiltered({
          id: player.id,
        });
        return filteredPlayers[0];
      }),
    );
    return new Team<T, N>(
      team.name,
      team.formerNames,
      formerPlayers,
      minSize,
      maxSize,
      roster,
    );
  }
}

// return rosters from db, change rosters in db, add rosters to db, remove rosters from db
// how to do wait list indicator?
