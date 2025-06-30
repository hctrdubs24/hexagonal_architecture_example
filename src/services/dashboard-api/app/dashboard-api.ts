import type {
  ForControlAuthenticating,
  ForRepoQuerying,
} from "../ports/drivens";
import type { ForAuthenticating } from "../ports/drivers";
import type { AuthenticatedUser, User } from "./schemas";

export class DashboradApi implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying,
  ) {}

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password,
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password,
    );
    const user = await this.repoQuerier.getUser(email);
    const result: AuthenticatedUser = {
      ...user,
      ...authDetails,
      permissions,
    };
    console.log("login", result);

    return result;
  }

  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user, password);
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password,
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password,
    );
    const result: AuthenticatedUser = {
      ...newUser,
      ...authDetails,
      permissions,
    };
    console.log("register", result);

    return result;
  }
}
