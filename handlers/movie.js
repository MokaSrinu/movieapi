const Movie=require("../database/movie.js")
const mongoose=require("mongoose")

const fetchAllMovies=async(req,res)=>{
    let page=req.query.page;
    let limit=req.query.page;
    if(!page || !limit){
        page=0;
        limit=0;
    }
    //console.log(page,limit);
    let movies=await Movie.find().skip(page).limit(limit);
    res.send({
        movies:movies
    })
}

const createMovie=async(req,res)=>{
    let {moviedata}=req.body;
    let movie=new Movie(moviedata);

    await movie.save();
    res.send({
        message:"Movie has been added...",
        data:movie
    })
}

const updateMovie=async(req,res)=>{
    const {id}=req.params;
    //console.log(mongoose.isValidObjectId(id));
    const {moviedata}=req.body;
    let movie=await Movie.findById(id);
    console.log(movie);

    for(const [key,value] of Object.entries(moviedata)){
        movie[key] =value;
    }

    await movie.save();

    res.send({
        message:"movie has been updated",
        data:movie
    })
}

const deleteMovie=async(req,res)=>{
  let {id}=req.params;

  await Movie.findByIdAndDelete(id);

  res.send({
    message:"Movie deleted successfully..."
  })

}

const fetchSinglemovie=async(req,res)=>{
    //console.log(mongoose.isValidObjectId("62d26734abd467b35b0e0147"));
    let {id}=req.params;
    let movie=await Movie.find({"_id":id});
    //console.log(movie);
  if(movie){
   res.send({
    message:`Movie found with id:${id}`,
    data:movie
   })
  }else{
   res.status(404).send({
    message:`Movie not found with id:${id}`
   })
  }
}

const fetchMovieByTitle=async(req,res)=>{
    let page=req.query.page;
    let limit=req.query.page;
    if(!page || !limit){
        page=0;
        limit=0;
    }
   let {title}=req.params;
   //console.log(req.params,title);
   let movie=await Movie.find({"title":title}).skip(page).limit(limit);
   res.send({
    data:movie
   })
}

const fetchMoviebyRating=async(req,res)=>{
    let page=req.query.page;
    let limit=req.query.page;
    if(!page || !limit){
        page=0;
        limit=0;
    }
    let {rating}=req.params;
    console.log(req.params,rating);
    let movie=await Movie.find({"imdbrating":rating}).skip(page).limit(limit);
    res.send({
     data:movie
    })
 }

 const searchMovie=async(req,res)=>{
    let page=req.query.page;
    let limit=req.query.page;
    if(!page || !limit){
        page=0;
        limit=0;
    }
    let {search}=req.params;
    console.log(search)
    let movie=await Movie.find({"title":{$regex:search}}).skip(page).limit(limit);
    res.send({
     data:movie
    })
 }

module.exports={
    fetchAllMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    fetchSinglemovie,
    fetchMovieByTitle,
    fetchMoviebyRating,
    searchMovie
};