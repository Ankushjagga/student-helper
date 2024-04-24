const express = require("express")
const router= express.Router();
const userRouter=require("../controllers/userauth")
const authenticate = require("../middleware/authenticate")


router.get("/Student",authenticate,userRouter.home);
router.get("/register",userRouter.register);
router.get("/login",userRouter.login);
router.post("/register",userRouter.registeronpost);
router.post("/login",userRouter.loginonpost);
router.get("/logout",userRouter.logout);
router.get("/datesheets",authenticate,userRouter.showdatesheet);
router.get("/ques", authenticate,userRouter.showques);
router.get("/timetable",authenticate,userRouter.showtime);
// router.get("/del",userRouter.del);
router.post('/datesheet',userRouter.UploadDatesheet);
router.post('/question', userRouter.uploadquestion);
router.post('/timetable', userRouter.edittimetable);
router.post("/contact",authenticate,userRouter.contactonpost);
router.get("/getdata",authenticate,userRouter.getdata);



module.exports = router; 
