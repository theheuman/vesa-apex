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

export enum LeagueType {
  vesa = 'vesa',
  vcs = 'vcs',
}
export const getLeagueType = (minSize: number, maxSize: number): LeagueType => {
  if (minSize === maxSize && minSize === 3) {
    return LeagueType.vesa;
  } else {
    return LeagueType.vcs;
  }
};

export const getMinAndMaxFromLeague = (
  league: LeagueType,
): { min: number; max: number } => {
  return league === 'vesa' ? { min: 3, max: 3 } : { min: 3, max: 5 };
};
