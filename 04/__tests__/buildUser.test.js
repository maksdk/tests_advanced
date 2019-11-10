//@ts-check
import getFunction from '../functions';

const buildUser = getFunction();

test("not the same", () => {
  const user1 = buildUser();
  const user2 = buildUser();
  const user3 = buildUser();

  expect(user1).not.toEqual(user2);
  expect(user1).not.toEqual(user3);
  expect(user2).not.toEqual(user3);
});

test("set params", () => {
  const equal1 = {
    firstName: "firstName"
  };
  const equal2 = {
    firstName: "firstName",
    lastName: "lastName"
  };
  const equal3 = {
    email: "email"
  };
  const equal4 = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email"
  };

  const user1 = buildUser(equal1);
  const user2 = buildUser(equal2);
  const user3 = buildUser(equal3);
  const user4 = buildUser(equal4);

  expect(user1).toEqual(Object.assign(user1, equal1));
  expect(user2).toEqual(Object.assign(user2, equal2));
  expect(user3).toEqual(Object.assign(user3, equal3));
  expect(user4).toEqual(equal4);
});


test('buildUser random', () => {
  const user1 = buildUser();
  const user2 = buildUser();
  expect(user1).not.toEqual(user2);
});

test('buildUser override', () => {
  const newData1 = {
    email: 'test@email.com',
  };
  const user1 = buildUser(newData1);
  expect(user1).toMatchObject(newData1);
});