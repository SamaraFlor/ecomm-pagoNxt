import { randomUUID } from 'node:crypto';

export const productExample = {
    usuarioId: randomUUID(),
    nome: 'Iphone 11',
    valor: 5990.00,
    quantidade: 11,
    descricao: 'Iphone 11 Branco, 256GB, Novo, Lacrado!',
    categoria: 'smartphones',
    caracteristicas: [
        {
            nome: 'cor',
            descricao: 'branco',
        },
        {
            nome: 'desbloquado',
            descricao: 'sim',
        },
        {
            nome: 'memória',
            descricao: '8 GB',
        },
        {
            nome: 'armazenamento',
            descricao: '256 GB',
        }
    ],
    imagens: [
        {
            url: 'url-da-imagem.jpg',
            descricao: 'Frente do Iphone',
        },
        {
            url: 'url-da-imagem-2.jpg',
            descricao: 'Traseira do Iphone',
        }
    ],
}






