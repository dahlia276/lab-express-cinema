const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get("/movies", async(req,res) => {
try{
    const moviesFromDB = await Movie.find();
    console.log(moviesFromDB)
    res.render("movies", {moviesFromDB})
} catch(e) {
    res.render("error");
    console.log(e);
}
});

router.get("/movies/:movieId", async (req, res) => {
    try{
    const movie = await Movie.findById(req.params.movieId);
    res.render("movie-details", {movie});
} catch(e) {
   
    console.log(e);
}
  });

module.exports = router;