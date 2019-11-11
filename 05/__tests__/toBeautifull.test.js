import os from 'os';
import path from 'path';
import {
   promises as fs
} from 'fs';
import _ from 'lodash';
import getFunction from '../functions';

const prettifyHTMLFile = getFunction();

// BEGIN (write your solution here)
const getFixPath = (name) => path.join(__dirname, "..", "__fixtures__", name);
test("beautifull", async () => {
   await prettifyHTMLFile(getFixPath("before.html"));

   const expected = await fs.readFile(getFixPath("after.html", "utf-8"));
   const result = await fs.readFile(getFixPath("before.html", "utf-8"));

   expect(expected.toString().trim()).toEqual(result.toString().trim());
});
// END