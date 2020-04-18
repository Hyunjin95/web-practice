import { Router } from 'express';

import { handleLogOut } from '../models/userController';

const router = Router();

router.post('/', handleLogOut);

export default router;
