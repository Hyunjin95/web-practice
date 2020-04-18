import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  if (!req.user) {
    res.render('signin.ejs');
  } else {
    const { email } = req.user;
    res.render('main.ejs', { email });
  }
});

router.get('/main', (req, res) => {
  res.redirect('/');
});

export default router;
