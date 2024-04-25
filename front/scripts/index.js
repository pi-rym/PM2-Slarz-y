const axios = require("axios");
const renderFilms = require("./renderMovies");
const {resetForm} = require("./resetForm");

//Dos modulos para su respectiva funcion
/* const {sendForm} = require("./sendForm");
const {clearForm} = require("./clearForm"); */

const getMovies = async () => {
    try {
        const response = await axios.get ("http://localhost:3000/movies");
        const movies = response.data;
        movies.forEach(movie => {
            renderFilms(movie); 
        });
    } catch (error) {
        //Rellenar un mensaje de error
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const genreInput = document.getElementById('genre');
        const genreValue = genreInput.value.trim();
        const genreArray = genreValue.split(',').map(genre => genre.trim());

        const formData = {
            title: document.getElementById("title").value,
            year: document.getElementById("year").value,
            director: document.getElementById("director").value,
            duration: document.getElementById("duration").value,
            genre: genreArray,
            rate: document.getElementById("rate").value,
            poster: document.getElementById("poster").value,
        };

        try {
            axios.post('http://localhost:3000/movies/post', formData);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    clearButton.addEventListener("click", resetForm);
});

getMovies();


/*Mejorar la pagina y agregar las dos que hacen falta
"title": document.getElementById("title").value,
            "year": document.getElementById("year").value,
            "director": document.getElementById("director").value,
            "duration": document.getElementById("duration").value,
            "genre": document.getElementById("genre").value,
            "rate": document.getElementById("rate").value,
            "poster": document.getElementById("poster").value,
*/