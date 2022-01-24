import { SiteClient } from 'datocms-client';

export default async function criadorCartas(req, res){
    const full = process.env.FULL
    const GALERY = process.env.GALERY_ID
    if(req.method === 'POST') {
        const TOKEN = full;
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: GALERY, // ID do Model de "Galery" criado pelo Dato
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