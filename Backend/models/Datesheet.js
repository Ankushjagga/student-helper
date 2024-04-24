const mongoose = require("mongoose")

const   datesheetSchema =  mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    image:{
        type:String,
        require: true
    }
})

const Datesheet = mongoose.model("datesheet",datesheetSchema);

module.exports = Datesheet;