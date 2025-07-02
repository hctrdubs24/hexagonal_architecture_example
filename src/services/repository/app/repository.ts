import type { ForMonitoring } from "../ports/drivens";
import type { ForManagingUser } from "../ports/drivers";
import type { ExternalUser, RepoUser, User } from "./schemas";

export class Repository implements ForManagingUser {
  private userList: RepoUser[] = [];

  constructor(private readonly logger: ForMonitoring) {}

  async getUser(email: string): Promise<ExternalUser> {
    const user = this.userList.find((u) => u.email === email);
    if (!user) {
      this.logger.log("GetUser", `User not found`);
      throw new Error(`User not found`);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async createUser(user: User): Promise<ExternalUser> {
    const existingUser = this.userList.find((u) => u.email === user.email);
    if (existingUser) {
      this.logger.log("CreateUser", `User already exists`);
      throw new Error(`User already exists`);
    }

    const newUser: RepoUser = {
      ...user,
      id: String(this.userList.length + 1),
    };

    this.userList.push(newUser);
    this.logger.log("CreateUser", `User created successfully`);

    return { id: newUser.id, email: newUser.email, name: newUser.name };
  }
}
