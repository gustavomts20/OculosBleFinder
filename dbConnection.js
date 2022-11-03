import * as mysql from './node_modules/mysql/index.js'

export function dbConnect() {
    var con = mysql.createConnection({
        host: "projeto-oculos.cxqdn0nqyywp.sa-east-1.rds.amazonaws.com",
        user: "admin",
        password: "7p3R5&#h%j1e",
        database: "oculosble"
    });

    return con;
}