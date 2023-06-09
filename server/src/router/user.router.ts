import express from "express";

export const userrouter = express.Router();
import * as controller from "../controllers/main-controller"
import * as middleware from "../middlewares"
import passport from "passport"
userrouter.post('/login/',
    middleware.data.rules.loginvalidation,
    controller.auth.login
)
userrouter.post('/signup/',
    middleware.data.rules.signupvalidation,
    middleware.data.rules.isEmailExist,
    controller.auth.signup
)
userrouter.get('/getUsers/:_id',
    passport.authenticate('jwt', { session: false }),
    controller.auth.getusers
)
userrouter.get('/forgotPassword/:email',
    middleware.data.rules.isEmailForgotPasswordExist,
    controller.auth.forgotpassword
)
userrouter.post('/verifyOTP/',
    middleware.data.rules.isEmailValid,
    controller.auth.verifyOTP
)