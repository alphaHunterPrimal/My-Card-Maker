import { SiteClient } from 'datocms-client';

export default async function criadorUsuarios(req, res) {
    if (req.method === 'POST') {
        const TOKEN = 'e34de55ff09441611766d0fcd65144';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "1712004", // ID do Model de "Usuario" criado pelo Dato
            ...req.body,
        })

        console.log(registroCriado);

        res.json({
            registroCriado: registroCriado
        })
        return;
    }

    res.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}