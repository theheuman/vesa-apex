export interface Player {
  id: string;
  name: string;
  overstat: string;
  discord: string;
  otherNames?: string[];
}
export const LeagueTypes = {
  vesa: {
    max: 3,
    min: 3,
  },
  vcs: {
    max: 5,
    min: 3,
  },
};

export abstract class TeamWrapper {
  abstract id: string;
  abstract roster: PlayerListWrapper;
  abstract name: string;
  abstract formerNames: string[];
  abstract formerPlayers: Player[];
}

export class Team<T extends number, N extends number> extends TeamWrapper {
  id: string;
  roster: PlayerList<T, N>;
  name: string;
  formerNames: string[];
  formerPlayers: Player[];

  constructor(
    id: string,
    name: string,
    formerNames: string[],
    formerPlayers: Player[],
    minPlayers: T,
    maxPlayers: N,
    players: Player[],
  ) {
    super();
    this.id = id;
    this.name = name;
    this.formerNames = formerNames;
    this.formerPlayers = formerPlayers;
    this.roster = new PlayerList<T, N>(minPlayers, maxPlayers, players);
  }

  getPlayers() {
    return this.roster.getPlayers();
  }

  addPlayer(player: Player) {
    this.roster.addPlayer(player);
  }

  removePlayer(player: Player) {
    this.roster.removePlayer(player);
  }

  replacePlayer(newPlayer: Player, playerToReplace: Player) {
    this.roster.replacePlayer(newPlayer, playerToReplace);
  }
}

export abstract class PlayerListWrapper {
  abstract maxLength: number;
  abstract minLength: number;
  abstract players: Player[];

  abstract getPlayers(): Player[];
  abstract addPlayer(player: Player): void;
  abstract removePlayer(player: Player): void;
  abstract replacePlayer(newPlayer: Player, playerToReplace: Player): void;
}

class PlayerList<
  Min extends number,
  Max extends number,
> extends PlayerListWrapper {
  maxLength: number;
  minLength: number;
  players: Player[];

  constructor(minSize: Min, maxSize: Max, players?: Player[]) {
    super();
    this.maxLength = maxSize;
    this.minLength = minSize;

    if (players) {
      this.players = players;

      // Optional: You can add a runtime check if needed
      if (players.length < minSize || players.length > maxSize) {
        throw new Error(
          `Players array must have between ${minSize} and ${maxSize} players.`,
        );
      }
    } else {
      this.players = [];
    }
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(player: Player) {
    if (this.players.length >= this.maxLength) {
      throw Error(
        'Roster at max size, remove a player first or replacePlayer()',
      );
    }
    this.pushPlayer(player);
  }

  removePlayer(player: Player) {
    if (this.players.length <= this.minLength) {
      throw Error('Roster at min size, add a player first or replacePlayer()');
    }
    this.deletePlayer(player);
  }

  replacePlayer(newPlayer: Player, playerToReplace: Player) {
    // this looks like duplicate logic, but its important to check if the player can be added BEFORE we delete a player;
    if (this.findIndex(newPlayer) >= 0) {
      throw Error('New player already on team');
    }
    this.deletePlayer(playerToReplace);
    this.pushPlayer(newPlayer);
  }

  private pushPlayer(player: Player) {
    if (this.findIndex(player) >= 0) {
      throw Error('Player already on roster');
    }
    this.players.push(player);
  }
  private deletePlayer(player: Player) {
    const index = this.findIndex(player);
    if (index > -1) {
      this.players.splice(index, 1);
    } else {
      throw Error('Player not on roster');
    }
  }

  private findIndex(player: Player) {
    return this.players.findIndex(
      (currentPlayer) => currentPlayer.id === player.id,
    );
  }
}
