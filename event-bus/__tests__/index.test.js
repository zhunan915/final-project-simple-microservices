const request = require("supertest");
const app = require("../index");
const axios = require("axios");

jest.mock("axios"); // mock axios

describe("Event Bus", () => {
  it("POST /events should return 200", async () => {
    axios.post.mockResolvedValue({});

    const event = { type: "testEvent", data: { message: "hello" } };

    const res = await request(app)
      .post("/events")
      .send(event);

    expect(res.statusCode).toBe(200);
  });

//   it("GET /events should return stored events", async () => {
//     const res = await request(app).get("/events");

//     expect(res.statusCode).toBe(200);
//     expect(Array.isArray(res.body)).toBe(true);
//   });
});
