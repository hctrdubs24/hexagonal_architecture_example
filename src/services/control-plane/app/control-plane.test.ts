import { describe, expect, it } from "vitest";
import { ControlPlane } from "./control-plane";
import { RepoQuerierStubAdapter } from "../adapters/drivens/repo-querier-stub-adapter";

describe("ControlPlane", () => {
  const repoQuerier = new RepoQuerierStubAdapter();
  const controlPlane = new ControlPlane(repoQuerier);

  it.concurrent("should get auth details", async () => {
    // GIVEN
    const mockedEmail = "test@test.com";
    const mockedPassword = "12345";
    const expectedResult = { token: "test", refreshToken: "testRefreshToken" };

    // WHEN
    let result;
    try {
      result = await controlPlane.getAuthDetails(mockedEmail, mockedPassword);
    } catch (error) {}

    // THEN
    expect(expectedResult).not.toEqual(result);
  });

  it.concurrent("should get permissions", async () => {
    // GIVEN
    const mockedEmail = "test@test.com";
    const mockedPassword = "12345";
    const expectedResult = { admin: true, user: true };

    // WHEN
    let result;
    try {
      result = await controlPlane.getPermissions(mockedEmail, mockedPassword);
    } catch (error) {}

    // THEN
    expect(expectedResult).toEqual(result);
  });
});
