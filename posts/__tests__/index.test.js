// posts/__tests__/index.test.js
const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// import app logic from index.js (update your index.js to export `app`)
const app = require("../index");

describe("POST /post/create", () => {
  it("should create a post", async () => {
    const res = await request(app)
      .post("/post/create")
      .send({ title: "Test Post" });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.data.id).toBeDefined();
  });
});