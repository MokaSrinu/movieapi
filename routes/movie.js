const express = require('express');
const { fetchAllMovies, createMovie, updateMovie, deleteMovie, fetchSinglemovie, fetchMovieByTitle, fetchMoviebyRating, searchMovie } = require('../handlers/movie');

const movieRouter = express.Router()

movieRouter.post('/movies', createMovie)
movieRouter.get('/movies/', fetchAllMovies)
movieRouter.get('/movies/:id/', fetchSinglemovie)
movieRouter.patch('/movies/:id', updateMovie)
movieRouter.delete('/movies/:id', deleteMovie)
movieRouter.get('/movies/title/:title', fetchMovieByTitle)
movieRouter.get('/movies/rating/:rating', fetchMoviebyRating)
movieRouter.get('/movies/search/:search', searchMovie)
 
module.exports = movieRouter;



