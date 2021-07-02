const router=require('express').Router();
const login=require('./controllers/Login');
const register=require('./controllers/Register');
const contact = require("./Contact/Contact");
const subscribe=require("./controllers/Subscribe")
const post=require("./controllers/Post");
router.post('/login',login);
router.post("/register",register);
router.post("/contact",contact);
router.post("/post",post);
router.put("/subscribe",subscribe);
module.exports=router;