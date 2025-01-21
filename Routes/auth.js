const express = require('express')
router = express.Router()
const {sendOTP,register,login,forgotPassword,resetPassword} = require('../Controllers/auth')

router.post('/sendOTP',sendOTP);
router.post('/register',register);
router.post('/login',login);
router.post('/forgotPassword',forgotPassword);
router.post('/resetPassword',resetPassword);
module.exports = router