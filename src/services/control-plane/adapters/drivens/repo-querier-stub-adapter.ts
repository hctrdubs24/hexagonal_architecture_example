import type { AuthenticatedUser } from "../../app/schemas";
import type { ForRepoQuerying } from "../../ports/drivens";

export class RepoQuerierStubAdapter implements ForRepoQuerying {
  getUser(_email: string): Promise<AuthenticatedUser> {
    const user: AuthenticatedUser = {
      id: "stub-id",
      email: "test@test.com",
      name: "Test User",
      password: "12345",
      permissions: {
        admin: true,
        user: true,
      },
      authDetails: {
        token: "sdnshdb",
        refreshToken: "dnhsfg",
      },
    };

    return Promise.resolve(user);
  }
}
