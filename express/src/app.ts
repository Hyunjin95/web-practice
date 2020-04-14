import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../', 'public/main.html'));
});

app.listen(3000, () => {
  console.log('Wow, you just started the express server!');
});
