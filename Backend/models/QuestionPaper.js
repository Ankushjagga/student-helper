const mongoose = require("mongoose");

const quesschema =  mongoose.Schema({

    semester:{
        type:String,
        require:true

    },
    subject:{
        type:String,
        require:true
    },
    stream: {
type:String,
require:true
    },
    image:{
        type:String ,
        require:true,
    }

})

const Question = mongoose.model("question",quesschema);

module.exports = Question;