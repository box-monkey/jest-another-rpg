// we require this to recieve an export from main potion page, proper pathing required
const Potion = require("../lib/Potion.js");


test("creates a health potion object", () => {
  const potion = new Potion("health");

  // this expects the received input to coincide with the functionallity we are trying to create
  expect(potion.name).toBe("health");
  // expect.any method takes a constructor as an argument
  expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));

});

module.exports = Potion;