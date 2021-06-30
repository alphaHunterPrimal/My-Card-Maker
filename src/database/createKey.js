module.exports = async function (db, {keywords}){
    const insertedKey = await db.run(`
    INSERT INTO cartas (
        key
    ) VALUES (
        "${keywords.key}",
    )
    `)
}