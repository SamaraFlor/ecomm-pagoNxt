import express from 'express';
import { router } from './routes.js';

const app = express();

app.use(express.json());

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);

app.listen(3000, () => {
    console.log('products service is running');
});