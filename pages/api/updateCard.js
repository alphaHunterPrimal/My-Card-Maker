import { SiteClient } from 'datocms-client';

export default async function editarCarta(req, res) {
    const full = process.env.FULL
    const LOGIN = process.env.LOGIN_ID

        if (req.method === 'POST') {
            const TOKEN = full;
            const client = new SiteClient(TOKEN);
        
        const cartaEditada = await client.items.update(req.body.cardId, {
            //itemType: LOGIN,
            usuario: req.body.userName,
            name: req.body.name,
            author: req.body.author,
            typo: req.body.typo,
            keywords: req.body.keywords,
            sets: req.body.sets,
            velocidade: req.body.velocidade,
            arctype: req.body.arctype,
            card: req.body.card,
            cardurl: req.body.cardurl,
            custom: req.body.custom,
            custoe: req.body.custoe,
            ganho: req.body.ganho,
            mov: req.body.mov,
            direc: req.body.direc,
            dano: req.body.dano,
            vida: req.body.vida,
        })

        console.log(cartaEditada);
        res.json({
            cartaEditada: cartaEditada
        })
        return;
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}