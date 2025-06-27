import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboradApi } from "./dashboard-api";
import { User } from "./schemas";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboradApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  );

  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock,
  );

  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = compositionMock();

// Testing
authenticatorProxyAdapter.login("hector@gmail.com", "12345");
const registerMock: User = { email: "sherly@gmail.com", name: "ingrid" };
authenticatorProxyAdapter.register(registerMock, "12345");
