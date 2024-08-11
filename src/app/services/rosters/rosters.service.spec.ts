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

  describe('player list', () => {
    const testPlayer: Player = {
      id: '1',
      name: 'TheHeuman',
      otherNames: ['DC TheHeuman'],
      overstat: 'a valid url',
      discord: 'theheuman',
    };
    const testPlayerTwo: Player = {
      id: '2',
      name: 'Supreme',
      otherNames: ['r3mainz'],
      overstat: 'a valid url',
      discord: 'r3mainz',
    };
    const testPlayerThree: Player = {
      id: '3',
      name: 'Booch',
      otherNames: ['BoochieBadBoi'],
      overstat: 'a valid url',
      discord: 'booch',
    };
    const testPlayerFour: Player = {
      id: '4',
      name: 'Aqua',
      otherNames: ['DC Aqua', 'Crazy On Emotion'],
      overstat: 'a valid url',
      discord: 'thereforeisam',
    };

    describe('throw error', () => {
      it('Should define a player list', () => {
        const testList = new PlayerList(3, 5, [
          testPlayer,
          testPlayerTwo,
          testPlayerThree,
        ]);
        expect(testList).toBeDefined();
      });

      it('Should throw an error when player list is too small', () => {
        const constructList = () => {
          const testList = new PlayerList(3, 5, [testPlayer, testPlayerTwo]);
          console.log(testList);
        };
        expect(constructList).toThrow();
      });

      it('Should throw an error when player list is too large', () => {
        const constructList = () => {
          const testList = new PlayerList(3, 3, [
            testPlayer,
            testPlayerTwo,
            testPlayerThree,
            testPlayerFour,
          ]);
          console.log(testList);
        };
        expect(constructList).toThrow();
      });

      it('Should throw an error when adding a player to a full roster', () => {
        const testList = new PlayerList(3, 3, [
          testPlayer,
          testPlayerTwo,
          testPlayerThree,
        ]);
        const addPlayer = () => {
          testList.addPlayer(testPlayerFour);
        };
        expect(addPlayer).toThrow();
      });

      it('Should throw an error when adding a player thats already on the roster', () => {
        const testList = new PlayerList(3, 3, [
          testPlayer,
          testPlayerTwo,
          testPlayerThree,
        ]);
        const addPlayer = () => {
          testList.addPlayer(testPlayerThree);
        };
        expect(addPlayer).toThrow();
      });

      it('Should throw an error when removing a player from a min size roster', () => {
        const testList = new PlayerList(3, 3, [
          testPlayer,
          testPlayerTwo,
          testPlayerThree,
        ]);
        const removePlayer = () => {
          testList.removePlayer(testPlayerThree);
        };
        expect(removePlayer).toThrow();
      });

      it('Should throw an error when removing a player from a roster that they are not on', () => {
        const testList = new PlayerList(3, 3, [
          testPlayer,
          testPlayerTwo,
          testPlayerThree,
        ]);
        const removePlayer = () => {
          testList.removePlayer(testPlayerFour);
        };
        expect(removePlayer).toThrow();
      });
    });

    it('Should add player to roster', () => {
      const testList = new PlayerList(3, 4, [
        testPlayer,
        testPlayerTwo,
        testPlayerThree,
      ]);
      testList.addPlayer(testPlayerFour);
      expect(testList.players).toEqual([
        testPlayer,
        testPlayerTwo,
        testPlayerThree,
        testPlayerFour,
      ]);
    });

    it('Should remove a player from roster', () => {
      const testList = new PlayerList(3, 4, [
        testPlayer,
        testPlayerTwo,
        testPlayerThree,
        testPlayerFour,
      ]);
      testList.removePlayer(testPlayerFour);
      expect(testList.players).toEqual([
        testPlayer,
        testPlayerTwo,
        testPlayerThree,
      ]);
    });
  });
});
