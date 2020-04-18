import { Router } from 'express';

import main from './main';
import form from './form';
import email from './email';

const router = Router();

router.use('/', main);
router.use('/form', form);
router.use('/email', email);

export default router;
