import { Router, Request } from 'express';

import User, { UserInterface } from '../models/user';

const router = Router();

router.post('/form', (req: Request<{}, {}, UserInterface>, res) => {
  const { email } = req.body;
  res.render('login.ejs', { email });
});

router.post('/ajax', (req: Request<{}, {}, UserInterface>, res) => {
  const { email } = req.body;

  User.checkSampleUser()
    .then(async (exists) => {
      if (!exists) {
        await User.addSampleUser();
      }
      return User.findByEmail(email);
    })
    .then((user) => {
      if (!user.length) {
        return res.status(404).send('User not found');
      }
      return res.json(user[0]);
    })
    .catch(() => {
      res.status(500).send('Database Error!!');
    });
});

export default router;
