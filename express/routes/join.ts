import { Router, Request } from 'express';
import path from 'path';

import { publicPath } from '../app';
import User, { UserInterface } from '../models/user';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'join.html'));
});

router.post('/', (req: Request<{}, {}, UserInterface>, res) => {
  const userInput = req.body;
  User.addUser(userInput)
    .then((user) => {
      res.render('email', { email: user.email });
    })
    .catch(() => res.status(500).send('Failed to add user.'));
});

export default router;
