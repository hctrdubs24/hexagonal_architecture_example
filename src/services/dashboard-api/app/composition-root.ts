import { initTRPC } from "@trpc/server";
import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import {
  AuthenticatorProxyAdapter,
  authTRPCAdapter,
} from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  );

  // DRIVERS
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock,
  );

  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = compositionMock();

export const localTrpcCompose = () => {
  // DRIVENS
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();

  // APP
  const dashboardApiMock = new DashboardApi(
    controlAuthenticatorStub,
    repoQuerierStub,
  );

  // TRPC Instance
  const t = initTRPC.create();

  // TRPC DRIVER
  const authTrpcAdapterRouter = authTRPCAdapter(dashboardApiMock, t);

  const appRouter = t.router({ auth: authTrpcAdapterRouter });

  return { appRouter };
};

// Testing
// authenticatorProxyAdapter.login("hector@gmail.com", "12345");
// const registerMock: User = {
//   email: "sherly@gmail.com",
//   name: "ingrid",
//   password: "12345",
// };
// authenticatorProxyAdapter.register(registerMock, "12345");
