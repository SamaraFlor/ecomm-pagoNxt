import { randomUUID } from 'node:crypto';

export const productExample = {
    user_id: randomUUID(),
    name: 'Iphone 11',
    value: 5990.00,
    quantity: 11,
    description: 'Iphone 11 Branco, 256GB, Novo, Lacrado!',
    category: 'smartphones',
    features: [
        {
            name: 'cor',
            description: 'branco',
        },
        {
            name: 'desbloquado',
            description: 'sim',
        },
        {
            name: 'memória',
            description: '8 GB',
        },
        {
            name: 'armazenamento',
            description: '256 GB',
        }
    ],
    images: [
        {
            url: 'url-da-imagem.jpg',
            description: 'Frente do Iphone',
        },
        {
            url: 'url-da-imagem-2.jpg',
            description: 'Traseira do Iphone',
        }
    ],
}






