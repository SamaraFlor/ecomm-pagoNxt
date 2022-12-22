import express from 'express';

import { router } from './routes.js';

import swaggerUi from "swagger-ui-express";

import swaggerDocs from "..api-docs.json" assert {type: "json"}; ;


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(router);

app.listen(3000, () => {
    console.log('accounts service is running');
});