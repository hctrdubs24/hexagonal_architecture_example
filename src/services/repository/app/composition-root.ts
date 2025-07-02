import { LoggerStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";
import { Repository } from "./repository";
import type { User } from "./schemas";

export const compositionMock = () => {
  const logger = new LoggerStubAdapter();
  const repository = new Repository(logger);

  const userManagerProxy = new UserManagerProxy(repository);

  return { userManagerProxy };
};

export const { userManagerProxy } = compositionMock();

const registerMock: User = {
  email: "samuel@gmail.com",
  name: "Samuel",
  password: "12345",
};

userManagerProxy.getUser(registerMock.email);

userManagerProxy.createUser(registerMock, registerMock.password);
