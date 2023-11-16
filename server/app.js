const express =require("express")
const mongoose =require("mongoose")
const router=require("./routes/bookRoutes")
const cors =require("cors")

const app=express()

//MIddleware
app.use(express.json())
app.use(cors());
app.use("/books",router)


mongoose.connect("mongodb+srv://benjiab:ATyBcLw30ycwysYn@cluster0.4udtcmk.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=>{app.listen(6500);})
.catch((err)=>console.log(err))
