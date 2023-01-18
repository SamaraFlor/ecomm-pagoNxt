import express from 'express';
import cors from 'cors';
import { router } from './routes.js';

const app = express();

app.use(express.json());
app.use(cors())

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);

export { app };