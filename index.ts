import * as express from 'express';
import { parse_config } from './src/utils/config-parser';
import { router } from './src/routers';
import { log_message } from './src/utils/log-message';

async function main() {
    const app = express();
    await parse_config('config.conf');
    app.use('/' , router);
    app.listen(global.env.PORT, ( )=> {
        log_message('System is running. PORT: ' + global.env.PORT , 'success')
    });    
}

main(); 