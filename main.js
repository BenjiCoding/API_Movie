let btn = document.querySelector("button");
let input = document.querySelector("input");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let actors = document.querySelector("#actors");
let genres = document.querySelector("#genres");
let sortie = document.querySelector("#sortie");
let img = document.querySelector("img");


btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(input.value);
    getTitleMove();
})

function getTitleMove(){
    fetch(`http://www.omdbapi.com/?apikey=b69319d9&t=${input.value}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.Title);
        console.log(data.Actors);
        title.textContent = data.Title;
        description.textContent = data.Plot;
        actors.textContent = data.Actors;
        genres.textContent = data.Genre;
        sortie.textContent = data.Released;
        img.src = data.Poster;
    })
}

