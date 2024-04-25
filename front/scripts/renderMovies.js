const  { movieTransition } = require("./transition");
let id = 0;
let id_row = 0;


function renderFilms(element) {

    /* Contenedor padre */
    let divShowMovies = document.getElementById("showMovies");
    /*Contenedor tipo row*/
    let divRow = document.createElement("div");
    divRow.classList.add("row");
    divRow.classList.add("class-row");
    /*Contenedor tipo cow*/
    let divCol = document.createElement("div");
    divCol.classList.add("col");
    divCol.innerHTML = `
    <div class="card text-dark card-movies">
        <img src="${element.poster}" class="card-img img-fluid" alt="...">
    </div>
    `
    /*Añadiendo propiedades*/

    if (id % 3 === 0 || id === 0) {
        id_row = id;
        divRow.id = id_row;

        divRow.appendChild(divCol);
        divShowMovies.appendChild(divRow);
    } 

    if (id % 3 !== 0) {
        let actualRow = document.getElementById(id_row);
        actualRow.appendChild(divCol);
    }

    id++;

    divCol.addEventListener("click", function() {
        movieTransition(element);
    });    
}

module.exports = renderFilms;

/*

<div class="row" id="${id}">    
            <div class="col">
                <div class="card text-dark card-movies">
                    <img src="${element.poster}" class="card-img img-fluid" alt="...">
                </div>
            </div>
        </div>



<div class="card text-dark card-movies">
            <img src="${element.poster}" class="card-img img-fluid" alt="...">
        </div>
*/