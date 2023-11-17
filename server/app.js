const express =require("express")
const mongoose =require("mongoose")
const router=require("./routes/bookRoutes")
const cors =require("cors")
const dotenv=require("dotenv")
dotenv.config({ path: './.env' });
const port=process.env.PORT || 5000
const password=process.env.PASSWORD

const app=express()

//MIddleware
app.use(express.json())
app.use(cors());
app.use("/books",router)


mongoose.connect(`mongodb+srv://benjiab:${password}@cluster0.4udtcmk.mongodb.net/bookStore?retryWrites=true&w=majority`)
.then(()=>console.log("connected to database"))
.then(()=>{app.listen({port});})
.catch((err)=>console.log(err))
console.log(port);
