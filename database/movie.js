const mongoose=require("mongoose");


const movieSchema=new mongoose.Schema({
    title: String,
    year: String,
    type: String,
    imdbrating: String,
    poster:  String
})

const Movie=mongoose.model("Movie",movieSchema);

module.exports=Movie;