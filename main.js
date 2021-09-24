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

// Fetch movie
async function FindMovie() {
    const response = await fetch("https://api.themoviedb.org/3/movie/800000?api_key=e4fc096b1f7f3fbf48013349c7456fef&language=en-US");
    const data = await response.json();
    console.log(data);
    title = data.title;
    console.log(data.title);
    title = document.getElementById("returnMovie").innerHTML = title;

}