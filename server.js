import express from 'express';
import cors from 'cors';

const app = express();

const port = 4711;

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
