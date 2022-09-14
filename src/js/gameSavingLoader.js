import read from './reader';
import json from './parser';
import GameSaving from './gameSavings';

export default class GameSavingLoader {
  static load() {
    (async () => {
      const data = await read();
      const jsonData = await json(data);
      const outputData = JSON.parse(jsonData);
      return new GameSaving(
        outputData.id,
        outputData.created,
        outputData.userInfo,
      );
    })();
  }
}
