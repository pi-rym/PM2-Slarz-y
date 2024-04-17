const moviesController = (req, res) => {
    res
        .status(200)
        .send("Estamos recibiendo una solicitud para obtener las peliculas, pronto estarán disponibles las peliculas");
};

module.exports = {
    moviesController,
}