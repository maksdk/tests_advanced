//@ts-check
import getFunction from '../functions';

const read = getFunction();

test("snapshot", () => {
  expect(() => read('/undefined')).toThrow()
  expect(() => read('/etc')).toThrow()
});