
import express, { json } from 'express';
import { router } from './router/routes.js';

const port = 3001;
const app = express();

app.use(json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});