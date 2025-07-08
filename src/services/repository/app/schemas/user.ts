import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type User = z.infer<typeof UserSchema>;

export interface RepoUser extends User {
  id: string;
}

export type ExternalUser = Omit<RepoUser, "password">;
