const jwt = require("jsonwebtoken");
const register =  require("../models/usermodels");
// const alert =  require("alert")
const authenticate = async (req,res,next)=>{

try {

    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token,"mynameisankushkumarjaggaok") 
console.log(verifyUser);
    const user = await register.findOne({_id:verifyUser._id});
console.log("inside aythenticate");
    req.user = user;
    req.token = token;
req.userID = user._id;
    next()
} catch (error) {
    console.log("error");
   res.status(401).json("You are Not Authorized User 😟");
}

}
module.exports = authenticate