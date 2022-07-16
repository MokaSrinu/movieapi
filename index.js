const express=require("express");
const cors=require("cors");
const { connectdatabase } = require("./database");
const movieRouter = require("./routes/movie");


const app=express();

app.use(express.json());
//app.use(cors());

app.use(logger);

app.use(movieRouter);

function logger(req, res, next) {
    console.log(new Date(), req.method, req.path);
    next();
}

app.listen(3000,()=>{
    console.log("server using port http://localhost:3000")
    connectdatabase();
})
