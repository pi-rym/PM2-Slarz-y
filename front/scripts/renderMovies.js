const  { movieTransition } = require("./transition");

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

    newDiv.id = element._id;

    console.log(element._id);
    
    let newFilmsDiv = document.getElementById("showMovies");
    newFilmsDiv.appendChild(newDiv);

    newDiv.addEventListener("click", function() {
        movieTransition(element);
    });    
}

module.exports = renderFilms;