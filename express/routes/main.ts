import { Router } from 'express';
import path from 'path';

import { publicPath } from '../app';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'main.html'));
});

router.get('/main', (req, res) => {
  res.redirect('/');
});

export default router;
