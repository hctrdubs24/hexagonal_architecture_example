import { DashboradApi } from "../../app/dashboard-api";
import { AuthenticatedUser, User } from "../../app/schemas";
import { ForAuthenticating } from "../../ports/drivers";

export class AuthenticatorProxyAdapter implements ForAuthenticating {
  constructor(private readonly dashboardApi: DashboradApi) {}
  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.login(email, password);
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.register(user, password);
  }
}
