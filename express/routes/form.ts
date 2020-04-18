import { Router } from 'express';
import path from 'path';

import { publicPath } from '../app';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'form.html'));
});

export default router;
