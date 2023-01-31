import swaggerExpress from 'swagger-ui-express';
import yaml from 'yamljs';

import { app } from './app.js'
import client from './repositories/databaseClient.js';

const swaggerDocs = yaml.load('./docs.yaml');
const PORT = process.env.PORT;

app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log('products service is running');

    client.authenticate()
        .then(() => { console.log('database connected') })
        .catch(error => { console.error(error)});
});