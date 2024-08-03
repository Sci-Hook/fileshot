import { readFileSync } from "fs";
import 'syncforeachloop';

export async function parse_config(config:string) {
    return new Promise<void>(async (resolve, reject) => {
        var file:Buffer = await readFileSync(config);
        var config_raw:string = `${file}`;
        var config_raw_lines:string[] = config_raw.split('\n');
        global.env = {}
        config_raw_lines.syncForEach(function (line:string,next) {
            let key = line.split('=')[0];
            let data = line.split('=')[1];
            global.env[key] = data;
            next();
        }, () => {
            resolve()   
        });
    });
}