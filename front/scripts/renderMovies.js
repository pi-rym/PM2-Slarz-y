const movieTransition = require("./transition");
let id = 0;


function renderFilms(element) {
    let newDiv = document.createElement("div");
    
    newDiv.classList.add("col");
    newDiv.classList.add("card");
    newDiv.classList.add("bg-dark");
    newDiv.classList.add("movie");
    
    /*Añadiendo propiedades*/
    
    newDiv.innerHTML = `
    <img src="${element.poster}" class="card-img-top" alt="Imagen de pelicula disponible">
    
    <div class="card-body text-center">
        <h5 class="card-title titleMovie">${element.title}</h5>
    </div>`;

    newDiv.id = id++;
    
    let newFilmsDiv = document.getElementById("movies");
    newFilmsDiv.appendChild(newDiv);

    newDiv.addEventListener("click", function() {
        movieTransition(newDiv.id);

        let galleryMovie = document.getElementById("bg-movie");

        galleryMovie.innerHTML = `
        <div class="position-absolute top-0 start-0 container-fluid contentMovie">
            <h5 class="">${element.title}</h5>
            <p class="">
                Director: ${element.director}. <br> <br>
                Year: ${element.year}. <br> <br>
                Genre: ${element.genre}. <br> <br>
                Rate: ${element.rate}/10 <br> <br>
            </p>
        `;
    });    
}

module.exports = renderFilms;