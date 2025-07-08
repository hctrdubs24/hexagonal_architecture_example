import { describe, expect, it } from "vitest";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { DashboardApi } from "./dashboard-api";
import type { AuthenticatedUser, User } from "./schemas";

describe("DashboardApi", () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  );

  it("should login", async () => {
    // GIVEN
    const mockedParams = { email: "hector@gmail.com", password: "12345" };

    const expectedResult: AuthenticatedUser = {
      id: "1",
      email: "test@test.com",
      name: "test",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    // WHEN

    const result = await dashboardApiMock.login(
      mockedParams.email,
      mockedParams.password,
    );

    // THEN
    expect(result).toEqual(expectedResult);
  });

  it.concurrent("should register", async () => {
    // GIVEN
    const mockedUser: User = {
      email: "hector@gmail.com",
      name: "Hector",
      password: "12345",
    };

    const expectedResult: AuthenticatedUser = {
      id: "1",
      email: "test@test.com",
      name: "test",
      token: "token",
      refreshToken: "refreshToken",
      permissions: {
        admin: true,
        user: true,
      },
    };

    // WHEN
    const result = await dashboardApiMock.register(mockedUser);

    // THEN
    expect(result).toEqual(expectedResult);
  });
});
