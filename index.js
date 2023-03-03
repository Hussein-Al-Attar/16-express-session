const express=require("express")
const sessions = require('express-session');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:false,
    cookie: { maxAge: oneDay},
    resave: false
}));
app.get("/save",(req,res)=>{
    
   req.session.name="hussein";
   res.send("save")
})
app.get("/",(req,res)=>{
    
    console.log(req.session.name)
    res.send(req.session.name)
})
app.set('trust proxy', 1) // trust first proxy
app.listen(3000,()=>{console.log("work")})
