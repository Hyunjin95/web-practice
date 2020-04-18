import { Router } from 'express';

import { handleSignIn } from '../models/userController';

const router = Router();

router.get('/', (req, res) => {
  res.render('signin.ejs');
});

router.post('/', handleSignIn);

export default router;
