const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  const db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db", db);

  it("shoud call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Joseph");
    expect(spy).toHaveBeenCalledWith("Joseph");
  });

  it("should call saverUser with user object", () => {
    const email = "joe@gmail.com";
    const password = "123456";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
