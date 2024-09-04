export interface DBPlayer {
  id: string;
  name: string;
  overstat: string;
  discord: string;
  otherNames?: string[];
}
export interface DBTeam {
  id: string;
  name: string;
  roster: { id: string; name: string }[];
  formerNames: string[];
  formerPlayers: { id: string; name: string }[];
  leagueType: string;
}
