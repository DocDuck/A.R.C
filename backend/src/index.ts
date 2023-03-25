import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();
    const fork = orm.em.fork()
    // const post = fork.create(Post, {title: "Another post!"})
    // await fork.persistAndFlush(post);
    const posts = await fork.find(Post,  {})
    console.log(posts)
}

main().catch(er => {
    console.error(er)
})
