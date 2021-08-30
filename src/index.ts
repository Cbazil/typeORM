import "reflect-metadata";
import {createConnection} from "typeorm";
import { smokeTest } from "../smoke-test";
import app from './app';

createConnection().then(async connection => {
    // await connection.runMigrations();

    // await smokeTest(connection)
    app.listen(8080, () => console.log('Server listening on port 8080'));
}).catch(error => console.log(error));
