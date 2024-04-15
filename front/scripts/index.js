const axios = require("axios");
const renderFilms = require("./renderMovies");

const getMovies = async () => {
    try {
        const response = await axios.get ("https://students-api.up.railway.app/movies");
        const dataMovies = response.data;
        dataMovies.forEach(movie => {
            renderFilms(movie);
        });
    } catch (error) {
        //Rellenar un mensaje de error
    }
};

getMovies();


/*Mejorar la pagina y agregar las dos que hacen falta*/