import express from 'express';
import { auth, home, user } from '../controllers/index';
import { authValid, userValid } from '../validation/index';
import passport from 'passport';
import initPassportLocal from '../controllers/passportController/local';
import initPassportFacebook from '../controllers/passportController/facebook';
import initPassportGoogle from '../controllers/passportController/google';

// Init all passport
initPassportLocal();
initPassportFacebook();
initPassportGoogle();

const router = express.Router();

/**
 * Init all routes
 * @params app from exactly express
 */
const initRoutes = (app) => {
  router.get("/", auth.checkLoggedIn,  home.getHome);
  router.get("/logout", auth.checkLoggedIn, auth.getLogout);
  router.put("/user/update-avatar", auth.checkLoggedIn, user.updateAvatar);
  router.put("/user/update-info", auth.checkLoggedIn, userValid.updateInfo, user.updateInfo);

  router.get("/login-register", auth.checkLoggedOut, auth.getLoginRegister);
  router.get("/verify/:token", auth.checkLoggedOut, auth.getVerifyAccount);

  router.get("/auth/facebook", auth.checkLoggedOut, passport.authenticate("facebook", { scope: ["email"] }));
  router.get("/auth/facebook/callback", auth.checkLoggedOut, passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true
  }))

  router.get("/auth/google", auth.checkLoggedOut, passport.authenticate("google", { scope: ["email", "profile"] }));
  router.get("/auth/google/callback", auth.checkLoggedOut, passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true
  }))

  router.post("/register",auth.checkLoggedOut, authValid.register , auth.postRegister)
  router.post("/login", auth.checkLoggedOut, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true
  }));

  return app.use("/", router);
}

module.exports = initRoutes;
