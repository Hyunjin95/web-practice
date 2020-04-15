import { Router, Request } from 'express';
import path from 'path';

import { emailType, publicPath } from '../app';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'main.html'));
});

router.get('/main', (req, res) => {
  res.redirect('/');
});

router.get('/form', (req, res) => {
  res.sendFile(path.join(publicPath, 'form.html'));
});

router.post('/email_post', (req: Request<{}, {}, emailType>, res) => {
  const { email } = req.body;
  res.render('email.ejs', { email });
});

router.post('/ajax_email_request', (req: Request<{}, {}, emailType>, res) => {
  const { email } = req.body;
  res.status(200).json({ email });
});

export default router;
