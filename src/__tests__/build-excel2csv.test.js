const { readFile } = require('fs/promises');
const { join } = require('path');
const { excel2csv } = require('../../bin/build-excel2csv');

test('converts xlsm file properly', async () => {
  const expected = await readFile(join(__dirname, './fixtures/output.csv'), { encoding: 'utf-8' });
  const actual = await excel2csv(join(__dirname, './fixtures/source.xlsm'));

  expect(expected).toBe(actual);
});
