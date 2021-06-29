const router=require('express').Router();
const login=require('./controllers/Login');
const register=require('./controllers/Register');
router.post('/login',login);
router.post("/register",register);
module.exports=router;