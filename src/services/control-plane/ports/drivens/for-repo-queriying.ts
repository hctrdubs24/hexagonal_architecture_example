import type { AuthenticatedUser } from "../../app/schemas";

export interface ForRepoQuerying {
  getUser(email: string): Promise<AuthenticatedUser>;
}
