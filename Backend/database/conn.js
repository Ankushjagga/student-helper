const mongoose=require("mongoose");
mongoose.set("strictQuery", false);
const db=mongoose.connect("mongodb+srv://ankushjagga97:7GjywDhtpRb69A6J@examxter.supy33y.mongodb.net/?retryWrites=true&w=majority&appName=Examxter").then(()=>{
    console.log("connection sucseefull");
}).catch((err)=>{
    console.log(err);
})

    