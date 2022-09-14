// TODO: write your code here

import read from './reader';
import json from './parser';
import GameSaving from './gameSavings';
// import GameSavingLoader from './gameSavingLoader';

class GameSavingLoader {
  static async load() {
    const data = await read();
    const outputData = await json(data);
    const res = JSON.parse(outputData);
    return new GameSaving(
      res.id,
      res.created,
      res.userInfo,
    );
  }
}

(async () => {
  try {
    const data = await GameSavingLoader.load();
    return data;
  } catch (err) {
    return err.name;
  }
})();
