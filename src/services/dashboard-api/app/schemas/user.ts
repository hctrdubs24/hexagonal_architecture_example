import { z } from "zod";
import { PermissionsSchema } from "./auth";

export const AuthenticatedUserSchema = z.object({
  id: z.string(),
  email: z.string().email("Invalid email"),
  name: z.string(),
  token: z.string(),
  refreshToken: z.string(),
  permissions: PermissionsSchema,
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;

export const RegisterSchema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export interface User extends Pick<AuthenticatedUser, "email" | "name"> {
  password: string;
}
