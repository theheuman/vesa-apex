import { DBTeam } from './dbInterfaces';

export const players = [
  {
    id: '1',
    name: 'TheHeuman',
    otherNames: ['DC TheHeuman'],
    overstat: 'a valid url',
    discord: 'theheuman',
  },
  {
    id: '2',
    name: 'Supreme',
    otherNames: ['r3mainz'],
    overstat: 'a valid url',
    discord: 'r3mainz',
  },
  {
    id: '3',
    name: 'Booch',
    otherNames: ['BoochieBadBoi'],
    overstat: 'a valid url',
    discord: 'booch',
  },
  {
    id: '4',
    name: 'Aqua',
    otherNames: ['DC Aqua', 'Crazy On Emotion'],
    overstat: 'a valid url',
    discord: 'thereforeisam',
  },
  {
    id: '5',
    name: 'LastCall',
    otherNames: [],
    overstat: 'a valid url',
    discord: 'lastcall',
  },
  {
    id: '6',
    name: 'Proxy',
    otherNames: ['DC Proxy', 'VIVA Proxy'],
    overstat: 'a valid url',
    discord: 'proxy1',
  },
  {
    id: '7',
    name: '///baeV',
    otherNames: ['S3 Mikey', 'DC Mikey'],
    overstat: 'a valid url',
    discord: 's3mikey',
  },
  {
    id: '8',
    name: 'cTreazy',
    otherNames: [
      'I Love Cole Palmer',
      'Something Else I cant remember that was wild',
    ],
    overstat: 'a valid url',
    discord: 'ctreazy',
  },
  {
    id: '9',
    name: 'Lau',
    otherNames: ['Viva Lau'],
    overstat: 'a valid url',
    discord: 'gtnlau',
  },
  {
    id: '10',
    name: 'Goon',
    otherNames: ['kidxgoon', 'vivagoon'],
    overstat: 'a valid url',
    discord: 'kidxgoon',
  },
  {
    id: '11',
    name: 'FreeMelee',
    otherNames: [],
    overstat: 'a valid url',
    discord: 'FreeMelee',
  },
  {
    id: '12',
    name: 'Fizzy',
    otherNames: [],
    overstat: 'a valid url',
    discord: 'fizzy',
  },
  {
    id: '13',
    name: 'Blue',
    otherNames: ['Orange', 'Persimmon'],
    overstat: 'a valid url',
    discord: 'blue',
  },
];

export const teams: DBTeam[] = [
  {
    name: 'Dude Cube',
    leagueType: 'vesa',
    roster: [
      {
        id: '1',
        name: 'TheHeuman',
      },
      {
        id: '4',
        name: 'Aqua',
      },
      {
        id: '5',
        name: 'LastCall',
      },
    ],
    formerNames: [],
    formerPlayers: [
      {
        id: '6',
        name: 'Proxy',
      },
      {
        id: '7',
        name: '///baeV',
      },
      {
        id: '8',
        name: 'cTreazy',
      },
    ],
  },
  {
    name: 'Scrub Squad',
    leagueType: 'vesa',
    roster: [
      {
        id: '11',
        name: 'FreeMelee',
      },
      {
        id: '12',
        name: 'Fizzy',
      },
      {
        id: '13',
        name: 'Blue',
      },
    ],
    formerNames: [],
    formerPlayers: [],
  },
  {
    name: 'VIVA',
    leagueType: 'vcs',
    roster: [
      {
        id: '6',
        name: 'Proxy',
      },
      {
        id: '9',
        name: 'Lau',
      },
      {
        id: '10',
        name: 'Goon',
      },
    ],
    formerNames: [],
    formerPlayers: [
      {
        id: '6',
        name: 'Proxy',
      },
      {
        id: '7',
        name: '///baeV',
      },
      {
        id: '8',
        name: 'cTreazy',
      },
    ],
  },
];
