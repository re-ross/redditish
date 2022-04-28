import { Post } from "./../entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  const post = orm.em.nativeInsert(Post, { title: "my first post" });
  await orm.em.persistAndFlush(post);
  await orm.em.nativeInsert(Post, { title: "my second post" });
};

main().catch((err) => {
  console.log(err);
});
