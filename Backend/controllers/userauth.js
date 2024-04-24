const user=require("../models/usermodels")
const jwt = require("jsonwebtoken")
const Datesheet = require("../models/Datesheet");
const Question = require("../models/QuestionPaper")
const Timetable = require("../models/Timetable")
exports.home=(req,res)=>{
res.send("<h1>hello bro 😄</h1>");
}

    exports.login=(req,res)=>{
        res.send("<h1>hello bro login 😄</h1>");
        }
        exports.register=(req,res)=>{
            res.send("<h1>hello bro register 😄</h1>");
            }

            exports.registeronpost=async (req,res)=>{
                const {name,email,password,registers}=req.body;
                if(!name || !email || !password ||!registers){
                  return  res.status(422).json("enter fields properly"+ registers);
                }
                try{

                    const existinguser= await user.findOne({email});
                    if(existinguser){
                      console.log("email exist");

                      return  res.status(422).json("email already exist")
                    }
else{

    const adduser = new user({
        name,email,password,registers
    })
    const token = await adduser.generateAuthToken();
              res.cookie("jwt",token,{
                httpOnly:true
              });
              console.log(token);
    const usersave= await adduser.save();
    console.log(usersave);
    res.status(200).json("Register Sucessfull 😄");
}
                        
                }
                catch(err){
                    res.status(422).send(err);
                }
            } 


            exports.loginonpost= async(req,res)=>{
                try{
                
                    // if(!email ||!password){
                        //     return res.json("enter fields pls")
                        // }
                        const {email,password}=req.body;
                        if(!email || !password ){
                          return  res.status(422).json("enter fields properly");
                        }
                        const data = await user.findOne({email});
                    const token = await data.generateAuthToken();
                    // const ismatch = await bcrypt.compare(password,data.password);
                     console.log(token);
                     res.cookie("jwt",token,{
                        httpOnly:true
                      });
                    if(password===data.password){
                        
                        res.status(201).json("sign in sucessfully")
                    }
                    else{
                        res.status(401).json("password doesnot match");
                    }
                }
                catch(err){
                    res.status(401).send(err);
                }

            }
  
          
            exports.logout=(req,res)=>{
                res.clearCookie("jwt",{path:"/"})
                res.status(201).json("logout secussess")
                if(!res.cookie("jwt")){
                  res.status(400).send("unsucess");
                }
            }


           

         
            exports.UploadDatesheet = async(req, res) => {
                try {
                  let imageUploadFile;
                  let uploadPath;
                  let newImageName;
                  console.log(req.files);
                  if(!req.files || Object.keys(req.files).length === 0){
                    console.log('No Files where uploaded.');
                  } else {
              
                    imageUploadFile = req.files.image;
                    newImageName =  imageUploadFile.name;
              
                    uploadPath ='./Public/img/' + newImageName; 
              
                    imageUploadFile.mv(uploadPath, function(err){ 
                      if(err) return res.status(500).send(err); 
                    })
                  }
                  
                 
                
              
              
                  const newDatesheet = new Datesheet({
                    name: req.body.name,
                    image: newImageName
              
                  });
                   
                  await newDatesheet.save();
return res.status(200).json("upload sucessfully");              
               
                } catch (error) {
              console.log(error);
                  res.status(401).send(err)
                }
               
              }
              exports.showdatesheet = async(req ,res) => {
                try {
              
              console.log("cookie is "+ req.cookies.jwt);
              const datesheet = await Datesheet.find({});
              res.status(201).json(datesheet);
                 
                } catch (error) {
                  res.status(500).send({message: error.message || "Something went wrong 😩" });
                  
                }
               
                }
                
                exports.uploadquestion = async(req, res) => {
                  try {
                    let imageUploadFile;
                    let uploadPath;
                    let newImageName;
                    console.log(req.files);
                    if(!req.files || Object.keys(req.files).length === 0){
                      console.log('No Files where uploaded.');
                    } else {
                
                      imageUploadFile = req.files.image;
                      newImageName =  imageUploadFile.name;
                
                      uploadPath ='./Public/img/' + newImageName; 
                
                      imageUploadFile.mv(uploadPath, function(err){ 
                        if(err) return res.status(500).send(err); 
                      })
                    }
                    
                    console.log(imageUploadFile + newImageName + uploadPath);
                
                
                
                    const newquestion = new Question({
                      semester: req.body.semester,
                      subject : req.body.subject,
                      stream: req.body.stream,
                      image: newImageName
                
                    });
                     
                    await newquestion.save();
  return res.status(200).json("upload sucessfully");              
                 
                  } catch (error) {
                console.log(error);
                    res.status(401).send(error)
                  }
                 
                }

                exports.showques = async(req ,res) => {
                  try {
                
                console.log("cookie is "+ req.cookies.jwt);
                const ques = await Question.find({});
                  // const elect1st = await Question.find({
                  //   stream:
                  //   "Electrical"});
                res.status(201).json(ques);
                   
                  } catch (error) {
                    res.status(500).send({message: error.message || "Something went wrong 😩" });
                    
                  }
                 
                  }
                  exports.showtime = async(req ,res) => {
                    try {
                  
                  console.log("cookie is "+ req.cookies.jwt);
                  const ques = await Timetable.find({});
                    // const elect1st = await Question.find({
                    //   stream:
                    //   "Electrical"});
                  res.status(201).json(ques);
                     
                    } catch (error) {
                      res.status(500).json(error);
                      
                    }
                   
                    }
                 exports.edittimetable = async (req,res)=>{
             
                  try {
                      let imageUploadFile;
                      let uploadPath;
                      let newImageName;
                      console.log(req.files);
                      if(!req.files || Object.keys(req.files).length === 0){
                        console.log('No Files where uploaded.');
                      } else {
                  
                        imageUploadFile = req.files.image;
                        newImageName =  imageUploadFile.name;
                  
                        uploadPath ='./Public/img/' + newImageName; 
                  
                        imageUploadFile.mv(uploadPath, function(err){ 
                          if(err) return res.status(500).send(err); 
                        })
                      }
                      
                     
                    
                      const data = new Timetable({
                        image: newImageName
                  
                      });
                       
                      await data.save();


                    
                    // const data = await Timetable.findOneAndUpdate(req.body ,{$set:req.body,  "image": newImageName},{new:true})
                    // const a = await Recipe.findByIdAndUpdate(req.params.id,{$set:req.body, "image": req.files.image.name},{new:true});
                    console.log(data);

                    return res.status(200).json(data);  
                  } catch (error) {
                    res.status(500).send({message: error.message || "Something went wrong 😩" });
                    
                  }
                 }
//                 exports.del= async (req,res)=>{
// await Datesheet.deleteMany({});
// res.send("hello")
//                 }

exports.contactonpost=async (req,res)=>{
  try {
      const {name,email,message}= req.body;
      if(!name || !email || !message){
          return res.json("Please Enter Input Fields Properly")

      }
      const userContact=await user.findOne({_id:req.userID})
      console.log(userContact);
      if(userContact){
          const userMessage = await userContact.addMessage(name,email,message)
          console.log(userContact);
      userContact.save();
      res.status(201).json("Message Send Sucessfully 😄")
      }
  } catch (error) {
      console.log(error);
  }
}
exports.getdata = async(req,res)=>{
  res.send(req.user)
}