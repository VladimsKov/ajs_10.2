// import read from '../reader';
import json from '../parser';
import GameSaving from '../gameSavings';

function read() {
  return new Promise((resolve) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id:9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}

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

// test rejected
test('check rejected:', async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e.name).toMatch('Error');
  }
});
