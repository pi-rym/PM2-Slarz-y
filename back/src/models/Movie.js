const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre: [String],
    rate: String,
    poster: String,
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;