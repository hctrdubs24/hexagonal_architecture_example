import type { User as RepoUser } from "../../../repository/app/schemas";
import type { User } from "../../app/schemas";
import type { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
  email: "test@test.com",
  id: "1",
  name: "test",
};

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
  createUser(_user: User, _password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }
}
