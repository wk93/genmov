import { createMiddleware } from "hono/factory";

import z from "zod";

const EnvSchema = z.object({
  GEMINI_API_KEY: z.string().min(1),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default createMiddleware<{ Bindings: EnvSchema }>(async (c, next) => {
  EnvSchema.parse(c.env);
  await next();
});
