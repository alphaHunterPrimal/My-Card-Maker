//importando o sqlite
const Database = require("sqlite-async")
//criando as identificacões string
function execute(db){
    return db.exec(`
    CREATE TABLE IF NOT EXISTS cartas (
        type TEXT,
        name TEXT,
        card TEXT,
        sets TEXT,
        arctype TEXT,
        custo INTEGER,
        ganho INTEGER,
        mov INTEGER,
        vida INTEGER,
        dano INTEGER

    );
    `) 
}

//exportando as configuracões (db)
module.exports = Database.open(__dirname + "/database.sqlite").then(execute)