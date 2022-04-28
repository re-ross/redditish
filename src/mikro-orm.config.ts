import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  debug: !__prod__,
  use_env_variable: "DATABASE_URL",
  type: "postgresql",
  dialect: "postgresql",
  driverOptions: {
    connection: { ssl: { rejectUnauthorized: false } },
  },
} as Parameters<typeof MikroORM.init>[0];
