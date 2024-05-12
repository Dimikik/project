'use strict';

if (!(localStorage.getItem(localStorage.getItem("user")))) window.location.replace("../authorization_page/authorization.html");
let div = document.getElementById('div');
let menu_btn = document.getElementById("menu");
menu_btn.onclick = (event) =>{
    if (div.style.display == "block") div.style.display = "none";
    else div.style.display = "block";
}
let genres = []
function changeGenres(genre_btn){
    if (genres.indexOf(genre_btn.id) == -1 && genres.length < 3){
        genres.push(genre_btn.id);
        genre_btn.style.backgroundColor = "rgb(191, 255, 0)";
    }
    else if (genres.indexOf(genre_btn.id) != -1) {
        genre_btn.style.backgroundColor = "rgb(225, 255, 216)";
        genres.splice(genres.indexOf(genre_btn.id), 1);
    };
}
let books = document.getElementById("books");
let anime = document.getElementById("anime");
let humor = document.getElementById("humor");
let games = document.getElementById("games");
let music = document.getElementById("music");
let health = document.getElementById("health");
let sport = document.getElementById("sport");
let buety = document.getElementById("buety");
let food = document.getElementById("food");
let technlogies = document.getElementById("technlogies");
let cars = document.getElementById("cars");
let space = document.getElementById("space");
books.onclick = (event) => changeGenres(books);
anime.onclick = (event) => changeGenres(anime);
humor.onclick = (event) => changeGenres(humor);
games.onclick = (event) => changeGenres(games);
music.onclick = (event) => changeGenres(music);
health.onclick = (event) => changeGenres(health);
sport.onclick = (event) => changeGenres(sport);
buety.onclick = (event) => changeGenres(buety);
food.onclick = (event) => changeGenres(food);
technologies.onclick = (event) => changeGenres(technologies);
cars.onclick = (event) => changeGenres(cars);
space.onclick = (event) => changeGenres(space);


let create_btn = document.getElementById("create");
let title = document.getElementById("title");
let text = document.getElementById("text");
let err = document.getElementById("err");
function Error(text){
    err.innerHTML = '';
    let err_str = `<p id="err_text">${text}</p>`;
    err.insertAdjacentHTML("afterbegin", err_str);
}
create_btn.onclick = (event) =>{
    if (title.value.length < 4) Error("Заголовок слишком короткий!");
    else if (text.value.length < 4) Error("Текста слишком мало!");
    else if (genres.length == 0) Error("Выберите жанр!");
    else{
        let id = JSON.parse(localStorage.getItem("/anime")).length+JSON.parse(localStorage.getItem("/books")).length+JSON.parse(localStorage.getItem("/humor")).length+JSON.parse(localStorage.getItem("/games")).length+JSON.parse(localStorage.getItem("/music")).length+JSON.parse(localStorage.getItem("/health")).length+JSON.parse(localStorage.getItem("/sport")).length+JSON.parse(localStorage.getItem("/buety")).length+JSON.parse(localStorage.getItem("/food")).length+JSON.parse(localStorage.getItem("/technologies")).length+JSON.parse(localStorage.getItem("/cars")).length+JSON.parse(localStorage.getItem("/space")).length;
        id = String(id).padStart(8, "0");
        for(let i of genres){
            let data = JSON.parse(localStorage.getItem("/"+i));
            data.push([[title.value],[text.value],[id],[genres]]);
            localStorage.setItem("/"+i,JSON.stringify(data));
        }
    }
}