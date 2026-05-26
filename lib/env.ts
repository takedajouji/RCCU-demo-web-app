import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).optional(),
});

export type Env = z.infer<typeof envSchema>;

function parseEnv(): Env {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.warn("Env parse warnings:", parsed.error.flatten());
  }
  return parsed.success ? parsed.data : (process.env as unknown as Env);
}

export const env = parseEnv();

export function getSiteUrl(): string {
  const u = env.NEXT_PUBLIC_SITE_URL;
  if (u) return u.replace(/\/$/, "");
  return "http://localhost:3000";
}
