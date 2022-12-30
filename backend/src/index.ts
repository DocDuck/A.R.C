import { MikroORM, defineConfig } from "@mikro-orm/core";
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { isProd } from "./utils/constants";

const main = async () => {
    const orm = await MikroORM.init<PostgreSqlDriver>({
        dbName: 'ARC_DB',
        type: "postgresql",
        entities: ['./dist/entities'], // path to our JS entities (dist), relative to `baseDir`
        entitiesTs: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
        debug: !isProd       
    });

    console.log(orm.em)
}

main()