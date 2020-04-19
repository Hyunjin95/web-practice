import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Request, Response, NextFunction } from 'express';

import User, { UserInterface } from './user';

passport.serializeUser((user: UserInterface, done) => {
  done(null, user.email);
});

passport.deserializeUser((email: string, done) => {
  User.findByEmail(email)
    .then((user) => done(null, user[0]))
    .catch((e) => done(e));
});

passport.use(
  'signin',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'pw' },
    (email, pw, done) => {
      User.findByEmail(email)
        .then((usr) => {
          if (!usr.length) {
            return done(null, false, { message: 'Incorrect Username' });
          }
          if (!usr[0].validatePw(pw)) {
            return done(null, false, { message: 'Incorrect Password' });
          }
          return done(null, usr[0]);
        })
        .catch(() => done(null, false, { message: 'Server Error' }));
    }
  )
);

passport.use(
  'signup',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'pw' },
    (email, pw, done) => {
      User.findByEmail(email)
        .then((usr) => {
          if (usr.length) {
            return done(null, false, { message: 'User already exists.' });
          }
          return User.addUser({ email, pw })
            .then((user) => done(null, { email: user.email }))
            .catch(() => done(null, false, { message: 'Failed to sign up' }));
        })
        .catch(() => done(null, false, { message: 'Server Error' }));
    }
  )
);

export const handleSignIn = (
  req: Request<{}, {}, UserInterface>,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('signin', (err, user, info) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(401).json(info.message);
    }
    return req.logIn(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      }
      return res.json(user);
    });
  })(req, res, next);
};

export const handleSignUp = (
  req: Request<{}, {}, UserInterface>,
  res: Response,
  next: NextFunction
): void => {
  passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true,
  })(req, res, next);
};

export const handleLogOut = (req: Request, res: Response): void => {
  req.logout();
  res.redirect('/');
};
