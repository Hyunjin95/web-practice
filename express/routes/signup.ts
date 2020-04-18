import { Router } from 'express';

import { handleSignUp } from '../models/userController';

const router = Router();

router.get('/', (req, res) => {
  const msg = req.flash('error');
  res.render('signup.ejs', { message: msg || '' });
});

router.post('/', handleSignUp);

export default router;
