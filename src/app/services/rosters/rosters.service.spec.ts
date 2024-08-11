import { TestBed } from '@angular/core/testing';

import { RostersService } from './rosters.service';
import { Player, PlayerList } from './classes';

describe('RostersService', () => {
  let service: RostersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RostersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('roster size', () => {
    const testPlayer: Player = {
      id: '1',
      name: 'TheHeuman',
      otherNames: ['Supreme'],
      overstat: 'a valid url',
    };

    it('Should define a player list', () => {
      const testList = new PlayerList(3, 5, [
        testPlayer,
        testPlayer,
        testPlayer,
      ]);
      expect(testList).toBeDefined();
    });

    it('Should throw an error when player list is too small', () => {
      const constructList = () => {
        const testList = new PlayerList(3, 5, [testPlayer, testPlayer]);
        console.log(testList);
      };
      expect(constructList).toThrow();
    });

    it('Should throw an error when player list is too large', () => {
      const constructList = () => {
        const testList = new PlayerList(3, 3, [
          testPlayer,
          testPlayer,
          testPlayer,
          testPlayer,
        ]);
        console.log(testList);
      };
      expect(constructList).toThrow();
    });
  });
});
