const Movie = require("../models/Movie")

class Movies {
    async getAllMovies () {
        const movies = await Movie.find();
        return movies;
    }

    async createMovie (movie) {
        const newMovie = await Movie.create(movie);
        return newMovie;
    } 
}

const instMovies = new Movies();

module.exports = instMovies; 
