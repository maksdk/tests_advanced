import os from 'os';
import path from 'path';
import {
   promises as fs
} from 'fs';
import _ from 'lodash';
import getFunction from '../functions';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixuturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

let dest;

beforeEach(async () => {
  const filename = 'before.html';
  dest = path.join(os.tmpdir(), filename);
  await fs.unlink(dest).catch(_.noop);
  const src = getFixuturePath(filename);
  await fs.copyFile(src, dest);

});

test('prettifyHTMLFile', async () => {
  await prettifyHTMLFile(dest);
  const actual = await fs.readFile(dest, 'utf-8');
  const expected = await fs.readFile(getFixuturePath('after.html'), 'utf-8');
  expect(actual).toBe(expected.trim());
});
// END