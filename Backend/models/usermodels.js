const mongoose=require("mongoose");
const jwt = require("jsonwebtoken")
const userSchema =mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },  
    password:{
        require:true,
        type:String
    },
    registers:{
        require:true,
        type:String
    },
    messages:[
        {
            name:{
                require:true,
                type:String
            },
            email:{
                require:true,
                type:String
            },  
       
            message:{
                require:true,
                type:String
            }
          
        }
    ],
    tokens:[
        {

            token:{
                type:String
            }
        }
    ]
})



userSchema.methods.generateAuthToken = async function(){
try {
    let token = await jwt.sign({_id:this._id.toString()},"mynameisankushkumarjaggaok")
    this.tokens=this.tokens.concat({token:token})
    await this.save()
    return token;
} catch (error) {
    console.log(error);
}


} 
userSchema.methods.addMessage= async  function  (name,email,message){
    try {
        this.messages= this.messages.concat({name,email,message})
   await this.save()
   return this.messages;
    } catch (error) {
        console.log(error);
    }
}

const usermodel= mongoose.model("users",userSchema);

module.exports=usermodel;