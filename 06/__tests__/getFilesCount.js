import path from 'path';
import _ from 'lodash';
import getFunction from '../functions';

const getFilesCount = getFunction();

const getFixuturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

const log = (msg) => {
  console.log("LOG: ", msg);
};

test("files count", () => {
  const filesCount1 = getFilesCount(getFixuturePath("flat"), log);
  const filesCount2 = getFilesCount(getFixuturePath("nested"), log);

  expect(filesCount1).toEqual(3);
  expect(filesCount2).toEqual(4);
});