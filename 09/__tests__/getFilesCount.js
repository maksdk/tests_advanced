//@ts-check
import path from 'path';
import getFunction from '../functions';

const getFilesCount = getFunction();

const getFixuturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test("files count", () => {
  const log = jest.fn();

  const filesCount = getFilesCount(getFixuturePath("nested"), log);
  
  expect(filesCount).toEqual(4);
  expect(log).toHaveBeenCalledTimes(1);
  expect(log).toHaveBeenCalledWith("Go!");
});