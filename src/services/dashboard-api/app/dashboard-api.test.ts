import { describe, expect, it } from "vitest";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { DashboradApi } from "./dashboard-api";
import type { AuthenticatedUser } from "./schemas";

describe("DashboardApi", () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboradApi(
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
});
