import express from 'express';
import yamljs from 'yamljs';
import swaggerExpress from 'swagger-ui-express';
import { router } from './routes.js';

const swaggerDocs = yamljs.load('./docs.yaml');
const app = express();
app.use(express.json());

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);

app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs))

app.listen(3000, () => {
    console.log('accounts service is running');
});