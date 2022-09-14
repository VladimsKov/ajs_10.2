import read from '../reader';
import json from '../parser';
import GameSaving from '../gameSavings';

/* class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => {
        const res = JSON.parse(data);
        return new GameSaving(
          res.id,
          res.created,
          res.userInfo,
        );
      });
  }
} */

// test resolved

/* test('check resolve:', () => GameSavingLoader.load()
  .then((data) => {
    expect(data).toEqual(
      {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      },
    );
  })); */
