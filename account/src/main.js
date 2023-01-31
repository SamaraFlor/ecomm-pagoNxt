import yamljs from 'yamljs';
import swaggerExpress from 'swagger-ui-express';
import { app } from "./app.js"


const PORT = process.env.PORT;
const swaggerDocs = yamljs.load('./docs.yaml');

app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));


app.listen(PORT, () => {
    console.log('accounts service is running');
})
