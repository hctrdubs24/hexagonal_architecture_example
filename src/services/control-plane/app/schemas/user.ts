import { z } from "zod";
import { AuthDetailsSchema, PermissionsSchema } from "./auth";

export const AuthenticatedUserSchema = z.object({
  id: z.string(),
  email: z.string().email("Invalid email"),
  name: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  authDetails: AuthDetailsSchema,
  permissions: PermissionsSchema,
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;
