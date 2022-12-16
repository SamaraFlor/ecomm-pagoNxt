import express, { json } from 'express';
import router from "./routes/routes.js"

const port = 3000;
const app = express();

app.use(json());
app.use(router);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
