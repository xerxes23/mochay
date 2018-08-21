const utils = require("./utils");

it("should add to two numbers", () => {
  const res = utils.add(20, 3);

  if (res !== 23) {
    throw new Error(`Expected 44, but got ${res}`);
  }
});

it("should square a number", () => {
  const res = utils.square(4);

  if (res !== 16) {
    throw new Error(`Expected 16, but got ${res}`);
  }
});
