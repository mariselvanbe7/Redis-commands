import { createClient} from "redis";

import * as dotenv from "dotenv";

dotenv.config()
 export const cacheClient = createClient({
    socket: {
        host: process.env.DB_HOST,
        port: 19825
    },
    password: process.env.DB_PASS
});

