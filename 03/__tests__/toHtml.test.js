//@ts-check
import {
   promises as fs
} from 'fs';
import path from 'path';
import getFunction from '../functions';

const toHtmlList = getFunction();

const formats = ['cvs', 'json', 'yml'];
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

let expected;

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('result.html'), 'utf-8');
})

test.each(formats)('%s', async (format) => {
  const filePath = getFixturePath(`list.${format}`);
  const actual = await toHtmlList(filePath);
  expect(actual).toBe(expected.trim());
});