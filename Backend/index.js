import express from "express";
import  mongoose  from "mongoose";
import route from "./Route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended:true}));
app.use(bodyParser.urlencoded({ extend:true}));
app.use(cors());
app.use("/users",route);

let PORT = 8000;

const URL = 'mongodb+srv://tariq-rasheed:tariq-123@cluster0.xxyrn.mongodb.net/PROJECT0?retryWrites=true&w=majority';

mongoose.connect(URL,{ useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT,()=> {
        console.log(`server is running successfully on Port ${PORT}`);
    });
}).catch(error =>{
    console.log("Error:",error.message)
})

