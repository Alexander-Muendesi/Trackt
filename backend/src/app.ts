import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import db from './database/models';

import AuthRouter from './routes/authRoute';


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json({limit:"5mb"}));

db.on('error', console.error.bind(console, "MongoDB connection error: "));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api",AuthRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});