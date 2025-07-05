import type { AuthDetails, Permissions } from "./auth";

export interface AuthenticatedUser extends AuthDetails, Permissions {
  id: string;
  email: string;
  password: string;
  name: string;
}
