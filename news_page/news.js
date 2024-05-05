'use strict'
if (!(localStorage.getItem(localStorage.getItem("user")))) window.location.replace("../authorization_page/authorization.html");
localStorage.setItem("/anime", '[[["title"],["аниме"],["00000001"]]]');
localStorage.setItem("/books", '[[["title"],["книги"],["00000002"]]]');
localStorage.setItem("/humor", '[[["title"],["юмор"],["00000003"]]]');
localStorage.setItem("/games", '[[["title"],["игры"],["00000004"]]]');
localStorage.setItem("/music", '[[["title"],["музыка"],["00000005"]]]');
localStorage.setItem("/health", '[[["title"],["здоровье"],["00000006"]]]');
localStorage.setItem("/sport", '[[["title"],["спорт"],["00000007"]]]');
localStorage.setItem("/buety", '[[["title"],["красота"],["00000008"]]]');
localStorage.setItem("/food", '[[["title"],["еда"],["00000009"]]]');
localStorage.setItem("/technologies", '[[["title"],["технологии"],["00000010"]]]');
localStorage.setItem("/cars", '[[["title"],["автомобили"],["00000011"]]]');
localStorage.setItem("/space", '[[["title"],["космос"],["00000012"]]]');
let shew_news = [];
let user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
if (user[1] == undefined)  window.location.replace('../chosing_of_genres/index.html');
let container = document.getElementById('container');
let news_btn = document.getElementById("new_btn");
let chose_genres_btn = document.getElementById("chose_genre");
chose_genres_btn.onclick = (event) =>{
    window.location.replace("../chosing_of_genres/index.html")
}
let sign_out_btn = document.getElementById("sign_out");
sign_out_btn.onclick = (event) =>{
    localStorage.setItem("user", undefined);
    window.location.replace("../authorization_page/authorization.html");
}
let mygenres = user[1];
let myGenres = [];
for (let key in mygenres){
    if (mygenres[key]) myGenres.push(key);
}
const err = document.createElement('p');
err.innerHTML = "Новости для вас закончились";
news_btn.onclick = (event) =>{
    let i;
    let div = document.getElementById("new");
    let news;
    let news_one;
    let genre;
    for(i = 10; i > 0; i--){
        genre = myGenres[Math.floor(Math.random() * myGenres.length)];
        news = JSON.parse(localStorage.getItem("/" + genre));
        news_one = news[Math.floor(Math.random() * news.length)];
        let id = news_one[2][0];
        if (shew_news.indexOf(news_one[2][0]) == -1){
            i = -1;
            shew_news.push(id);
            break;
        }
    }
    if(i == 0){
        div.innerHTML = '';
        div.appendChild(err);
    }
    else {
        let title = news_one[0];
        let text = news_one[1];
        let new_div = document.createElement('div')
        let h2 = document.createElement('h2');
        h2.innerHTML = title;
        h2.className = "title";
        let p = document.createElement('p');
        p.innerHTML = text;
        p.className = "text";
        new_div.appendChild(h2);
        new_div.appendChild(p);
        container.insertBefore(new_div, div);
    }
}