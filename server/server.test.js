const request = require("supertest");
const expect = require("expect");
const app = require("./server");

it("should return error response", done => {
  request(app)
    .get("/")
    .expect(404)
    .expect(res => {
      expect(res.body).toInclude({ error: "Page not found" });
    })
    .end(done);
});

it("should return users array", done => {
  request(app)
    .get("/users")
    .expect(200)
    .expect(res => {
      expect(res.body).toInclude({ name: "Joe Mendoza", role: "CEO" });
    })
    .end(done);
});
