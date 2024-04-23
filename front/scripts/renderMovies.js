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
    <div class="col">
    <div class="card text-dark card-movies">
        <img src="${element.poster}" class="card-img img-fluid" alt="...">
        </div>
    </div>`;

    newDiv.id = id++;
    
    let newFilmsDiv = document.getElementById("showMovies");
    newFilmsDiv.appendChild(newDiv);

    /* newDiv.addEventListener("click", function() {
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
    });   */  

    console.log("Elemento generado con exito");
}

module.exports = renderFilms;