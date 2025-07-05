import type { AuthDetails, Permissions } from "../../app/schemas";

export interface ForManagingAuthDetails {
  getAuthDetails(email: string, password: string): Promise<AuthDetails>;
  getPermissions(email: string, password: string): Promise<Permissions>;
}
