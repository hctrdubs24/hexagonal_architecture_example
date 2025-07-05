import type { AuthenticatedUser } from "../../app/schemas";
import type { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStubAdapter implements ForRepoQuerying {
  getUser(email: string): Promise<AuthenticatedUser> {
    const user: AuthenticatedUser = {
      id: "stub-id",
      email: "test@test.com",
      name: "Test User",
      admin: true,
      user: true,
      token: "sdnshdb",
      refreshToken: "dnhsfg",
      password: "12345",
    };

    return Promise.resolve(user);
  }
}
