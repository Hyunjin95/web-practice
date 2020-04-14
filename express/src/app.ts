import express from 'express';
import path from 'path';

const app = express();

const publicPath = path.join(__dirname, '../', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'main.html'));
});

app.get('/main', (req, res) => {
  res.redirect('/');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(publicPath, 'form.html'));
});

type emailType = {
  email: string;
};

app.post('/email_post', (req: express.Request<{}, {}, emailType>, res) => {
  const { email } = req.body;
  res.render('email.ejs', { email });
});

app.post(
  '/ajax_email_request',
  (req: express.Request<{}, {}, emailType>, res) => {
    const { email } = req.body;
    res.status(200).json({ email });
  }
);

app.listen(process.env.PORT || 3000, () => {
  /* eslint-disable-next-line */
  console.log(
    `app is running on port ${process.env.PORT ? process.env.PORT : 3000}`
  );
});
