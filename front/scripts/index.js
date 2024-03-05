console.log(tempData);

let primeraPelicula = document.getElementById("primeraPelicula");
let segundaPelicula = document.getElementById("segundaPelicula");
let terceraPelicula = document.getElementById("terceraPelicula");

let arrPeliculas = [primeraPelicula, segundaPelicula, terceraPelicula]

tempData.map(function (pelicula, indice) {
    let elemento = arrPeliculas[indice];
    
    let primerDiv = document.createElement("div");
    primerDiv.className("box");
    let segundoDiv = document.createElement("div");
    segundoDiv.className("box");
    let tercerDiv = document.createElement("div");
    tercerDiv.className("box");

    let h2 = document.createElement("h2");
    h2.className("titulo-pelicula");
    let urlImg = document.createElement("img");
    urlImg.className("imagen-pelicula")
    let descripcion = document.createElement("p");
    let datos  = document.createElement("p");
    


})


