//importando o sqlite
const Database = require("sqlite-async")
//criando as identificacões string
function execute(db){
    return db.exec(`
    CREATE TABLE IF NOT EXISTS cartas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        name TEXT,
        card TEXT,
        sets TEXT,
        arctype TEXT,
        custo INTEGER,
        ganho INTEGER,
        mov INTEGER,
        MV TEXT, 
        vida INTEGER,
        dano INTEGER
    );
    CREATE TABLE IF NOT EXISTS keywords (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT
    );
    `) 
}

//exportando as configuracões (db)
module.exports = Database.open(__dirname + "/database.sqlite").then(execute)