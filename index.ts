import * as express from 'express';
import { parse_config } from './src/utils/config-parser';


async function main() {
    const app = express();
    parse_config('config.conf')
    app.listen();    
}

main();