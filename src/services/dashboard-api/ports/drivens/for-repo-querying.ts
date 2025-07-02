import type { ExternalUser } from "../../../repository/app/schemas";
import type { User } from "../../app/schemas";

export interface ForRepoQuerying {
  getUser(email: string): Promise<ExternalUser>;
  createUser(user: User): Promise<ExternalUser>;
}
