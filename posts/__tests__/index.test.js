const request = require("supertest");
const app = require("../index");
const axios = require("axios");

jest.mock("axios"); // ✅ Mock axios

describe("POST /post/create", () => {
  it("should create a post", async () => {
    axios.post.mockResolvedValue({}); // ✅ prevent real call

    const res = await request(app)
      .post("/post/create")
      .send({ title: "Test Post" });

    expect(res.statusCode).toEqual(201); // ✅ now this should pass
    expect(res.body.data.id).toBeDefined();
  });
});