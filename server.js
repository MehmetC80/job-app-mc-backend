import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.BASE_URL;
const mode = process.env.MODE;
const port = process.env.PORT;

const app = express();

const url = mode === 'development' ? `${baseUrl}:${port}` : baseUrl;

app.use(cors());

app.get('/jobs', (req, res) => {
  res.send([
    {
      name: 'Job 01',
    },
    {
      name: 'job 02',
    },
  ]);
});

app.get('*', (req, res) => {
  res.status(404).send(
    `<body style="background-color:#333">
      <h1 style="color:#ccc; text-align:center;margin:20% auto;">Ooops 404!!!</h1>
      </body>`
  );
});

app.listen(port, () => {
  console.log(`server runs on port: ${port}`);
});
