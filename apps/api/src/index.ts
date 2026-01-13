import { Hono } from "hono";

import envMiddleware, { type EnvSchema } from "./middlewares/env.middleware";

interface HonoApp {
  Bindings: EnvSchema;
}

const app = new Hono<HonoApp>().use(envMiddleware).get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
