import type { ForRepoQuerying } from "../ports/drivens";
import type { ForManagingAuthDetails } from "../ports/drivers";
import type { AuthDetails, AuthenticatedUser, Permissions } from "./schemas";
import jwt from "jsonwebtoken";

export class ControlPlane implements ForManagingAuthDetails {
  private secretKey: string = "mySecretKey";
  constructor(private readonly repoQuerier: ForRepoQuerying) {}

  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    const user = await this.repoQuerier.getUser(email);

    if (!user || user.password !== password) {
      throw new Error("User not found");
    }

    const generateToken = (
      payload: object,
      secretKey: string,
      expiresIn: string,
    ): string => jwt.sign(payload, secretKey, { expiresIn });

    const generateRefreshToken = (
      payload: object,
      secretKey: string,
      expiresIn: string,
    ): string => jwt.sign(payload, secretKey, { expiresIn });

    const token = generateToken({ email }, this.secretKey, "30m");

    const refreshToken = generateRefreshToken({ email }, this.secretKey, "1d");

    if (!token || !refreshToken) {
      throw new Error("Failed creating token, please check credentials");
    }

    const result: AuthDetails = {
      token,
      refreshToken,
    };

    console.log("AUTHDETAILS", result);

    return result;
  }

  async getPermissions(email: string, password: string): Promise<Permissions> {
    const user: AuthenticatedUser = await this.repoQuerier.getUser(email);

    if (!user || user.password !== password) {
      throw new Error("User not found or password is incorrect");
    }

    const result: Permissions = {
      admin: user.admin,
      user: user.user,
    };

    console.log("PERMISSIONS", result);

    return result;
  }
}
