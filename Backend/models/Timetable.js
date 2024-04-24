const mongoose = require("mongoose")

const   TimetableSchema =  mongoose.Schema({
 
    image:{
        type:String,
        require: true
    }
})

const Timetable = mongoose.model("Timetable",TimetableSchema);

module.exports = Timetable;