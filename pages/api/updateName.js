import { SiteClient } from 'datocms-client';

export default async function editarNome(req, res) {
    const full = process.env.FULL
    const LOGIN = process.env.LOGIN_ID

        if (req.method === 'POST') {
            const TOKEN = full;
            const client = new SiteClient(TOKEN);
        
        const nomeEditado = await client.items.update(req.body.userId, {
            //itemType: LOGIN,
            usuario: req.body.userName,
        })

        console.log(nomeEditado);
        res.json({
            nomeEditado: nomeEditado
        })
        return;
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}