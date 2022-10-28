
import { UsingJoinColumnOnlyOnOneSideAllowedError } from "typeorm";
import {cacheClient} from "./redisdata"

cacheClient.on('error', (err) => console.error(err));
cacheClient.connect().then(() => console.log("connected")).then( async() => {

const pingCommandResult = await cacheClient.ping();
console.log("Ping command result: ", pingCommandResult);

cacheClient.set("HeroName","Ben10")
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

cacheClient.get("HeroName")
    .then((data) => console.log(data))
    .catch((e) => console.log(e))


cacheClient.del("jason")

cacheClient.KEYS('*')
    .then((key) => console.log(key))
    .catch((e) => console.log(e))
})