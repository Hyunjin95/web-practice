import { Router } from 'express';

import main from './main';
import signup from './signup';
import signin from './signin';
import logout from './logout';

const router = Router();

router.use('/', main);
router.use('/signup', signup);
router.use('/signin', signin);
router.use('/logout', logout);

export default router;
