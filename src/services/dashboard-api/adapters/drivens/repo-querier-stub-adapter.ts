import type { ExternalUser } from "../../../repository/app/schemas";
import type { User } from "../../app/schemas";
import type { ForRepoQuerying } from "../../ports/drivens";

const userMock: ExternalUser = {
  email: "test@test.com",
  id: "1",
  name: "test",
};

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(email: string): Promise<ExternalUser> {
    return Promise.resolve(userMock);
  }

  createUser(user: User): Promise<ExternalUser> {
    return Promise.resolve(userMock);
  }
}
