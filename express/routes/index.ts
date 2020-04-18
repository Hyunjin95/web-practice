import { Router } from 'express';

import main from './main';
import form from './form';
import email from './email';
import join from './join';

const router = Router();

router.use('/', main);
router.use('/form', form);
router.use('/email', email);
router.use('/join', join);

export default router;
