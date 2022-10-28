import "reflect-metadata"
import {Connection, DataSource} from "typeorm"
import {Students} from "./Entity/Student"


export const MyDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "MMs@1810061",
    database: "mari_app",
    synchronize: true,
    logging: false,
    entities: [Students],
   
    
})

MyDataSource.queryResultCache.connect()
