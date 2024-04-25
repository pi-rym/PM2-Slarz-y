// const insMovies = require("../services/moviesService");
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
};