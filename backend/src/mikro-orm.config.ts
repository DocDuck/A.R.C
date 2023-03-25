import path from "path";
import { dbName, dbPassword, dbPort, isProd } from "./utils/constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

const mikroOrmConfig = {
    migrations: {
        path: path.join(__dirname, `./migrations`),
        pattern: /^[\w-]+\d+\.[tj]s$/,
        emit: 'js',
    },
    entities: [Post], // path to our JS entities (dist), relative to `baseDir`
    dbName,
    password: dbPassword,
    type: "postgresql",
    port: dbPort,
    debug: !isProd
} as Parameters<typeof MikroORM.init>[0];

export default mikroOrmConfig;
