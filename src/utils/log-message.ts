var colors = {
    success:"\u001b[32m",
    warn:"\u001b[33m",
    error:"\u001b[31m"
}

var sign = {
    success:"✓",
    warn:"!",
    error:"X"
}
export function log_message(message:string,type:'success'|'warn'|'error') {
    console.log(`${colors[type]}[${sign[type]}]\x1b[0m ${message}`)
}