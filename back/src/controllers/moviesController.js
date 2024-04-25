const instMovies = require("../services/moviesService");

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await instMovies.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor",
            });
        }
    },

    createUser: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await instMovies.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({
                error: req.body,
            })
        }
    },
};