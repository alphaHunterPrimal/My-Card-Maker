module.exports = async function (db, {cartas}){
    const insertedCards = await db.run(`
    INSERT INTO cartas (
        type,
        name,
        card,
        sets,
        arctype,
        custo,
        ganho,
        mov,
        MV, 
        vida,
        dano
    ) VALUES (
        "${cartas.type}",
        "${cartas.name}",
        "${cartas.card}",
        "${cartas.sets}",
        "${cartas.arctype}",
        "${cartas.custo}",
        "${cartas.ganho}",
        "${cartas.mov}",
        "${cartas.MV}",
        "${cartas.vida}",
        "${cartas.dano}",
    )
    `)
}