import yamljs from 'yamljs';
import swaggerExpress from 'swagger-ui-express';
import { app } from './app.js';

const swaggerDocs = yamljs.load('./docs.yaml');

app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs))

app.listen(3000, () => {
    console.log('accounts service is running');
});



