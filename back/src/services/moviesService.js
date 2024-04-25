const { getAllMovies } = require("../controllers/moviesController");
const Movie = require("../models/Movie")

class Movies {
    constructor () {
        this.arrMovies = [];
    }

    async getAllMovies () {
        const movies = await Movie.find();
        return movies;
    }

    postMovie ( {movie} ) {
        if (!movie.title) return "Error, faltan parametros";
        if (!movie.year) return "Error, faltan parametros";
        if (!movie.duration) return "Error, faltan parametros";
        if (!movie.genre) return "Error, faltan parametros";
        if (!movie.rate) return "Error, faltan parametros";
        if (!movie.poster) return "Error, faltan parametros";

        this.arrMovies.push(movie);
    }
}

const instMovies = new Movies();

module.exports = instMovies; 
