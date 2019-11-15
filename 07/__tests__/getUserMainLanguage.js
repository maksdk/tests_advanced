// import _ from 'lodash';
import OctokitFake from '../support/OctokitFake';
import getFunction from '../functions';

const getUserMainLanguage = getFunction();

const data = [{language: "js"}, {language: "python"}, {language: "js"}];

test("getUserMainLanguage", async () => {
  const lang = await getUserMainLanguage("name user", new OctokitFake(data));
  
  expect(lang).toEqual("js");
});