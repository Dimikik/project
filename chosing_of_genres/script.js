'use strict'
let user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
let myGenres = {books: false, anime: false, humor: false, games: false, music: false, health:0,
                sport: false, buety: false, food: false, technologies: false, cars: false};
function changeGenres(genre){
    myGenres[genre] = !myGenres[genre];
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
books.onclick = (event) => changeGenres("books");
anime.onclick = (event) => changeGenres("anime");
humor.onclick = (event) => changeGenres("humor");
games.onclick = (event) => changeGenres("games");
music.onclick = (event) => changeGenres("music");
health.onclick = (event) => changeGenres("health");
sport.onclick = (event) => changeGenres("sport");
buety.onclick = (event) => changeGenres("buety");
food.onclick = (event) => changeGenres("food");
technologies.onclick = (event) => changeGenres("technologies");
cars.onclick = (event) => changeGenres("cars");
space.onclick = (event) => changeGenres("space");