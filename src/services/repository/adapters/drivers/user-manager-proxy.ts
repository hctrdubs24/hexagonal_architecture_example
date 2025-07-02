import type { Repository } from "../../app/repository";
import type { ExternalUser, User } from "../../app/schemas";
import type { ForManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements ForManagingUser {
  constructor(private readonly repository: Repository) {}

  async createUser(user: User): Promise<ExternalUser> {
    return this.repository.createUser(user);
  }

  async getUser(email: string): Promise<ExternalUser> {
    return this.repository.getUser(email);
  }
}
