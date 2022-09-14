// TODO: write your code here

import read from './reader';
import json from './parser';
import GameSaving from './gameSavings';
// import GameSavingLoader from './gameSavingLoader';
/* 
class GameSavingLoader {
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
}
 */
/* GameSavingLoader.load()
  .then((saving) => saving,
    (error) => error); */
