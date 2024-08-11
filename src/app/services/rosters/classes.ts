export interface Player {
  id: string;
  name: string;
  overstat: string;
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
      throw Error('Roster at max size, remove a player first');
    }
    this.players.push(player);
  }
}
