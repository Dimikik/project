'use strict';

if (!(localStorage.getItem(localStorage.getItem("user")))) window.location.replace("../authorization_page/authorization.html");

if (localStorage.getItem("/books") == undefined) localStorage.setItem("/books", []);
if (localStorage.getItem("/anime") == undefined) localStorage.setItem("/anime", []);
if (localStorage.getItem("/humor") == undefined) localStorage.setItem("/humor", []);
if (localStorage.getItem("/games") == undefined) localStorage.setItem("/games", []);
if (localStorage.getItem("/music") == undefined) localStorage.setItem("/music", []);
if (localStorage.getItem("/health") == undefined) localStorage.setItem("/health", []);
if (localStorage.getItem("/sport") == undefined) localStorage.setItem("/sport", []);
if (localStorage.getItem("/buety") == undefined) localStorage.setItem("/buety", []);
if (localStorage.getItem("/food") == undefined) localStorage.setItem("/food", []);
if (localStorage.getItem("/technologies") == undefined) localStorage.setItem("/technologies", []);
if (localStorage.getItem("/cars") == undefined) localStorage.setItem("/cars", []);
if (localStorage.getItem("/space") == undefined) localStorage.setItem("/space", []);
let shew_news = [];
let user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
if (user[1] == undefined)  window.location.replace('../chosing_of_genres/index.html');
let container = document.getElementById('container');
let news_btn = document.getElementById("new_btn");
let chose_genres_btn = document.getElementById("chose_genre");
chose_genres_btn.onclick = (event) =>{
    window.location.replace("../chosing_of_genres/index.html")
}
let new_news_btn = document.getElementById("new_news");
new_news_btn.onclick = (event) =>{
    window.location.replace("../new_news_page/index.html");
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