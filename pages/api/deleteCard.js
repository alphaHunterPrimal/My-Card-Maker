import { SiteClient } from 'datocms-client';

export default async function deletarCarta(req, res) {
    const full = process.env.FULL
    const LOGIN = process.env.LOGIN_ID

        if (req.method === 'POST') {
            const TOKEN = full;
            const client = new SiteClient(TOKEN);
        
        const cartaDeletada = await client.items.destroy(req.body.cardId)

        console.log(cartaDeletada);

        return;
    }

}