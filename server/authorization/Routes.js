const router=require('express').Router();
const login=require('./controllers/Login');
const register=require('./controllers/Register');
const contact = require("./Contact/Contact");
router.post('/login',login);
router.post("/register",register);
router.post("/contact",contact);
module.exports=router;