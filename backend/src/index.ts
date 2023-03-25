import {MikroORM, defineConfig, IDatabaseDriver} from "@mikro-orm/core";
import { Post } from "./entities/Post";
import {dbPort, dbPassword, isProd, dbName} from "./utils/constants";

const main = async () => {
    const orm = await MikroORM.init<IDatabaseDriver>({
        dbName: dbName,
        password: dbPassword,
        type: "postgresql",
        port: dbPort,
        entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
        entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
        debug: !isProd
    });

    const fork = orm.em.fork()

    const post = fork.create(Post, {title: "Firs post!"})
    await fork.persistAndFlush(post)
    console.log(orm.em)
}

main().catch(er => {
    console.error(er)
})
