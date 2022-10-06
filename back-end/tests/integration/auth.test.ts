import supertest from "supertest";
import { prisma } from "../../src/config/database.js";
import app from "../../src/app.js";
import { authFactory } from "../factories/authFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("Auth Integration tests", () => {
  it("should return 201 - user create successfully", async () => {
    const user = authFactory.createUser();
    const result = await supertest(app).post("/sign-up").send(user);
    expect(result.status).toBe(201);
  });

  it("should return 422 - differents password", async () => {
    const user = authFactory.createUser();
    user.confirmPassword = "senhaerrada";
    const result = await supertest(app).post("/sign-up").send(user);
    expect(result.status).toBe(422);
  });

  it("should return 409 - email already registered", async () => {
    const user = authFactory.createUser();
    const result1 = await supertest(app).post("/sign-up").send(user);
    const result2 = await supertest(app).post("/sign-up").send(user);
    expect(result2.status).toBe(409);
  });

  it("should return 200 - signin success", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmPassword;
    delete user.userName;
    const responseSI = await supertest(app).post("/sign-in").send(user);
    const { token } = responseSI.body;
    expect(token).not.toBeNull();
    expect(responseSI.status).toBe(200);
  });

  it("should return 401 - wrong password", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmPassword;
    delete user.userName;
    const userWrongPassword = { ...user, password: "senhaIncorretaa" };
    const responseSI = await supertest(app)
      .post("/sign-in")
      .send(userWrongPassword);
    expect(responseSI.status).toBe(401);
  });

  it("should return 404 - email not registered", async () => {
    const user = authFactory.createUser();
    await supertest(app).post("/sign-up").send(user);
    delete user.confirmPassword;
    delete user.userName;
    user.email = "incorreto@incorreto.com";
    const responseSI = await supertest(app).post("/sign-in").send(user);
    expect(responseSI.status).toBe(404);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
