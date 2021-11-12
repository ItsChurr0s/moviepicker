// Show & hide genre selection
let genreToggle = document.getElementById("form-by-genre");
let actorToggle = document.getElementById("actor-search");
let directorToggle = document.getElementById("director-search");


const resettableElements = [
    genreToggle,
    actorToggle,
    directorToggle,
];

function toggleElement(element) {
    resettableElements.forEach((node) => {
        node.style.display = "none";
    });

    element.style.display = "block";
}

// Show & hide genre selection
function ShowHideGenre() {
    let genreToggle = document.getElementById("form-by-genre");
    toggleElement(genreToggle);
}

// Show & hide actor search
function ShowHideActor() {
    let actorToggle = document.getElementById("actor-search");
    toggleElement(actorToggle);
}

// Show & hide director search
function ShowHideDirector() {
    let directorToggle = document.getElementById("director-search");
    toggleElement(directorToggle);
}

// Surprise Me Random Number Generator
function SurpriseMe() {
    let surpriseToggle = document.getElementById("surprise-me");
    toggleElement(surpriseToggle);
    randomID = Math.floor(Math.random() * 799999) + 1;
    console.log(randomID);
}

// Backdrop
function getBackdrop(backdrop) {
    backdropURL = `https://img.tmdb.org/t/p/w500${backdrop}`;
    backdropIMG = document.createElement('img');
    backdropIMG.src = backdropURL;
    backdropDiv = document.getElementById("backdropDiv");
    backdropDiv.appendChild(backdropIMG);
}

// Fetch movie
async function FindMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${randomID}?api_key=e4fc096b1f7f3fbf48013349c7456fef&language=en-US`);
    const data = await response.json();
    if (data.success == false) {
        SurpriseMe();
        FindMovie();
    }
    console.log(data);
    backdrop = data.backdrop_path;
    title = data.title;
    overview = data.overview;
    year = data.release_date;
    console.log(data.title);
    console.log(backdrop);
    backdrop = document.getElementById("backdropDiv").innerHTML = backdrop;
    title = document.getElementById("returnMovie").innerHTML = title;
    overview = document.getElementById("returnOverview").innerHTML = overview;
    year = document.getElementById("returnYear").innerHTML = year;

}