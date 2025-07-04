import type { AuthenticatedUser, User } from "../../app/schemas";

export interface ForAuthenticating {
  login(email: string, password: string): Promise<AuthenticatedUser>;
  register(user: User): Promise<AuthenticatedUser>;
}
