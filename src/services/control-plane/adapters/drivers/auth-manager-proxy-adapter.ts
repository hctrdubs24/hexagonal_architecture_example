import type { ControlPlane } from "../../app/control-plane";
import type { AuthDetails, Permissions } from "../../app/schemas";
import type { ForManagingAuthDetails } from "../../ports/drivers";

export class AuthManagerProxyAdapter implements ForManagingAuthDetails {
  constructor(private readonly controlPlane: ControlPlane) {}

  getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return this.controlPlane.getAuthDetails(email, password);
  }

  getPermissions(email: string, password: string): Promise<Permissions> {
    return this.controlPlane.getPermissions(email, password);
  }
}
