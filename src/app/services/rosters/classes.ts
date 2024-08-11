export interface Player {
  id: string;
  name: string;
  overstat: string;
  discord: string;
  otherNames?: string[];
}

export class Team {
  readonly players: Player[];
  name: string;
  formerNames: string[];
  formerPlayers: Player[];

  constructor(
    name: string,
    formerNames: string[],
    formerPlayers: Player[],
    players: Player[],
  ) {
    this.name = name;
    this.formerNames = formerNames;
    this.formerPlayers = formerPlayers;
    this.players = players;
  }
}

export class LeagueTeam extends Team {
  private roster: PlayerList<3, 3>;

  constructor(
    name: string,
    formerNames: string[],
    formerPlayers: Player[],
    players: Player[],
  ) {
    super(name, formerNames, formerPlayers, players);
    this.roster = new PlayerList(3, 3, players);
  }
}

// defines an array with a min and max length and specific array operations
export class PlayerList<Min extends number, Max extends number> {
  maxLength: number;
  minLength: number;
  players: Player[];
  constructor(minSize: Min, maxSize: Max, players?: Player[]) {
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

  replacePlayer(newPlayer: Player, playerToReplace: Player) {
    this.deletePlayer(playerToReplace);
    this.pushPlayer(newPlayer);
  }
}
