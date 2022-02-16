import { SiteClient } from 'datocms-client';

export default async function editarSenha(req, res) {
    const full = process.env.FULL
    const LOGIN = process.env.LOGIN_ID

        if (req.method === 'POST') {
            const TOKEN = full;
            const client = new SiteClient(TOKEN);
        
        const senhaEditada = await client.items.update(req.body.userId, {
            //itemType: LOGIN,
            senha: req.body.userPassword,
        })

        console.log(senhaEditada);
        res.json({
            senhaEditada: senhaEditada
        })
        return;
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}