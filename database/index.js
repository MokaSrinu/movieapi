const mongoose=require("mongoose");

const connectdatabase=async()=>{
    const dburi="mongodb://localhost:27017/imdbapi";

    try {
        const response=await mongoose.connect(dburi)
        console.log("Database connection successful...")
    } catch (error) {
        console.log("Database failed to connect...",error.message);
        throw error;
    }
}

module.exports={connectdatabase};