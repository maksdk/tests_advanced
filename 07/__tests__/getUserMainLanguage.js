// import _ from 'lodash';
import OctokitFake from '../support/OctokitFake';
import getFunction from '../functions';

const getUserMainLanguage = getFunction();

const data = [{
  language: "js"
}, {
  language: "python"
}, {
  language: "js"
}];

test("getUserMainLanguage", async () => {
  const lang = await getUserMainLanguage("name user", new OctokitFake(data));

  expect(lang).toEqual("js");
});

test('getUserMainLanguage when empty', async () => {
  const client = new OctokitFake([]);
  const mainLanguage = await getUserMainLanguage('user-without-repos', client);
  expect(mainLanguage).toBeNull();
});