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
        <h5 class="card-title titleMovie">${element.title} <br>(${element.duration})</h5>
        <p class="card-text descriptionMovie">
        Director: ${element.director}. <br> <br>
        Year: ${element.year}. <br> <br>
        Genre: ${element.genre}. <br> <br>
        Rate: ${element.rate} <img src="assets/img/star-fill.svg" alt="stars" id="star"> <br> <br>
        </p>
    </div>
    `
    
    
    let newFilmsDiv = document.getElementById("movies");
    newFilmsDiv.appendChild(newDiv);
}

module.exports = renderFilms;