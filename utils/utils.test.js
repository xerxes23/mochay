const expect = require("expect");

const utils = require("./utils");

it("should add to two numbers", () => {
  const res = utils.add(20, 3);

  expect(res)
    .toBe(23)
    .toBeA("number");
});

it("should add two numbers asynchronously", done => {
  utils.asyncAdd(7, 3, sum => {
    expect(sum)
      .toBe(10)
      .toBeA("number");
    done();
  });
});

it("should square a number", () => {
  const res = utils.square(4);
  expect(res).toBe(16);
});

it("should square a number asynchronously", done => {
  utils.asyncSquare(3, res => {
    expect(res)
      .toBe(9)
      .toBeA("number");
    done();
  });
});
// it('should expect some values', () => {
//   expect(12).toBe(12);
//   expect({name: 'Joseph'}).toNotEqual({name: 'Jose'});
// })

it("should set first and last names", () => {
  const user = utils.setName({}, "Joseph Mendoza");

  expect(user).toInclude({ firstName: "Joseph", lastName: "Mendoza" });
});
