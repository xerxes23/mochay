const expect = require("expect");
const app = require("./server");
const request = require("supertest");

describe("Server", () => {
  describe("GET /", () => {
    it("should return error response", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({ error: "Page not found" });
        })
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return users array", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: "Joe Mendoza", role: "CEO" });
        })
        .end(done);
    });
  });
});
