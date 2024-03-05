console.log(tempData);

let primeraPelicula = document.getElementById("primeraPelicula");
let segundaPelicula = document.getElementById("segundaPelicula");
let terceraPelicula = document.getElementById("terceraPelicula");

let arrPeliculas = [primeraPelicula, segundaPelicula, terceraPelicula]

tempData.forEach((pelicula, indice) => {
    let elemento = arrPeliculas[indice];

    let primerDiv = document.createElement("div");
    primerDiv.classList.add("box");
    let segundoDiv = document.createElement("div");
    segundoDiv.classList.add("box");
    let tercerDiv = document.createElement("div");
    tercerDiv.classList.add("box");

    let h2 = document.createElement("h2");
    h2.classList.add("titulo-pelicula");
    h2.textContent = pelicula.title;

    let urlImg = document.createElement("img");
    urlImg.classList.add("imagen-pelicula");
    urlImg.src = pelicula.poster;

    let descripcion = document.createElement("p");
    descripcion.classList.add("descripcion-pelicula");
    descripcion.textContent = pelicula.description;

    let generos = document.createElement("p");
    generos.classList.add("descripcion-pelicula");
    generos.textContent = "Generos: " + pelicula.genre;

    let año = document.createElement("p");
    año.classList.add("datos-relevantes");
    año.textContent = "Año: " + pelicula.year;

    let director = document.createElement("p");
    director.classList.add("datos-relevantes");
    director.textContent = "Director: " + pelicula.director;

    let duracion = document.createElement("p");
    duracion.classList.add("datos-relevantes");
    duracion.textContent = "Duracion: " + pelicula.duration;

    let calificacion = document.createElement("p");
    calificacion.classList.add("datos-relevantes");
    calificacion.textContent = "Calificacion: " + pelicula.rate;
    
    primerDiv.appendChild(h2);
    primerDiv.appendChild(descripcion);
    primerDiv.appendChild(generos)
    segundoDiv.appendChild(urlImg);
    tercerDiv.appendChild(director);
    tercerDiv.appendChild(año);
    tercerDiv.appendChild(duracion);
    tercerDiv.appendChild(calificacion);

    elemento.appendChild(primerDiv);
    elemento.appendChild(segundoDiv);
    elemento.appendChild(tercerDiv);
})


