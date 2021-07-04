const router=require('express').Router();
const login=require('./controllers/Login');
const register=require('./controllers/Register');
const contact = require("./Contact/Contact");
const subscribe=require("./controllers/Subscribe")
const post=require("./controllers/CreatePost");
const getPost = require("./controllers/GetPost");
const FinancePost=require("./PostHelp/FinancePost")
const GetFinance=require("./PostHelp/GetFinance")

const MedicalPost=require("./PostHelp/MedicalPost")
const GetMedical=require("./PostHelp/GetMedical")

const MentalPost=require("./PostHelp/MentalPost")
const GetMental=require("./PostHelp/GetMental")

router.post("/register",register);
router.post('/login',login);
router.post("/contact",contact);
router.post("/post",post);
router.get("/post",getPost);
router.put("/subscribe",subscribe);
router.post("/FinancePost",FinancePost);
router.get("/GetFinance",GetFinance);

router.post("/MedicalPost",MedicalPost);
router.get("/GetMedical",GetMedical);

router.post("/MentalPost",MentalPost);
router.get("/GetMental",GetMental);

module.exports=router;