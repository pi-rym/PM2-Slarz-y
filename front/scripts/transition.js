const backgroundImg = ["https://wallpapercave.com/wp/wp2033181.jpg", "https://wallpapercave.com/wp/wp2896601.jpg", "https://wallpapercave.com/wp/wp3873628.jpg"];

function movieTransition (index) {
    let element = document.getElementById("bg-movie");
    
    element.style.backgroundImage = `url(${backgroundImg[index]})`;

}

module.exports = movieTransition;