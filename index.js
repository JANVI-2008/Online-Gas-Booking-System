import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/myloginregisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("DB Connected")
})

const userschema = new mongoose.Schema({
    name: String,
    mobile: String,
    aadhar:String,
    password: String
})

const User=new mongoose.model("User",userschema)

//Routes
app.get("/",(req,res)=>{
    res.send("HELLO EVERYONE")
})
app.post("/login",(req,res)=>{
    const { mobile,password } = req.body
    User.findOne( (err,user)=>{
        if(user){
            // if(password===user.password){
                res.send({message:"Login Successfull",user: user})
            // }else{
            //     res.send({message:"Password didn't match"})
            // }
        }else{
            res.send({message: "User not registered"})
        }
        }
    )
    })

app.post("/register",(req,res)=>{
    const { name,mobile,aadhar,password } = req.body
    User.findOne({mobile: mobile}, (err,user) =>{
        if(user){
            res.send({message : "User Already Registered"})
        }else{
            const user = new User({
                name,
                mobile,
                aadhar,
                password
            })
            user.save( err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({message: "Successfully Registered , Please login now"})
                }
            })
        }
    })
    
})


app.listen("9002",()=>{
    console.log("BE started at port 9002")
})