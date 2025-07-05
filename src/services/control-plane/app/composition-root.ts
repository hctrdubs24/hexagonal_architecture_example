import { RepoQuerierStubAdapter } from "../adapters/drivens/repo-querier-stub-adapter";
import { AuthManagerProxyAdapter } from "../adapters/drivers";
import { ControlPlane } from "./control-plane";

const compositionMock = () => {
  const repoQueryStub = new RepoQuerierStubAdapter();
  const dashboardApiMock = new ControlPlane(repoQueryStub);

  const authenticatorProxyAdapter = new AuthManagerProxyAdapter(
    dashboardApiMock,
  );

  return {
    authenticatorProxyAdapter,
  };
};

export const { authenticatorProxyAdapter } = compositionMock();

const registerMock = {
  name: "John",
  email: "test@test.com",
  password: "12345",
};

authenticatorProxyAdapter.getAuthDetails(
  registerMock.email,
  registerMock.password,
);
authenticatorProxyAdapter.getPermissions(
  registerMock.email,
  registerMock.password,
);
