import { Router, Request } from 'express';
import path from 'path';

import { emailType, publicPath } from '../app';
import User from '../models/user';

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

  User.sampleUserExists()
    .then(async (exists) => {
      if (!exists) {
        await User.createSampleUser();
      }
      return User.findByEmail(email);
    })
    .then((user) => {
      if (!user.length) {
        return res.status(404).send('User not found');
      }
      return res.json(user[0]);
    })
    .catch(() => res.status(500).send('Database Error!!'));
});

export default router;
