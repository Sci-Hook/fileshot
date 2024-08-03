import * as express from 'express';
import {config} from 'dotenv';

config();

async function main() {
    const app = express();

    console.log(process.env.S3_BUCKET)
    

    app.listen();    
}

main();