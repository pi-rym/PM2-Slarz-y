module.exports = {
    movieTransition: (element) => {
        const div = document.getElementById("info");

        if (div) {
            div.innerHTML = `
            <div class="card mb-3 bg-dark" style="width: 1500px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${element.poster}" class="img-fluid rounded-start" style="width: 1500px;" id="img-movie" alt="...">    
                    </div>
                <div class="col-md-8 text-bg-dark">
                    <div class="container card-body contenido">
                        <h5 class="card-title movie-title">${element.title} (${element.duration})</h5>
                        <p class="card-text movie-information ">
                            Director: ${element.director}. <br>
                            Year: ${element.year}. <br>
                            Genre: ${element.genre}. <br>
                            Rate: ${element.rate}/10
                        </p>
                    </div>
                </div>
            </div>
            `;
        }
    }
};