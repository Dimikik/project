'use strict'
let user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
if (user[1] == undefined)  window.location.replace('../chosing_of_genres/index.html');
let container = document.getElementById('container');
let news_btn = document.getElementById("new_btn");
let mygenres = user[1];
let myGenres = [];
for (let key in mygenres){
    if (mygenres[key]) myGenres.push(key);
}
const clone = document.getElementById("new").cloneNode(true);
news_btn.onclick = (event) =>{
    let div = document.getElementById("new");
    let genre = myGenres[Math.floor(Math.random() * myGenres.length)];
    let news = JSON.parse(localStorage.getItem("/" + genre));
    let news_one = news[Math.floor(Math.random() * news.length)];
    let title = news_one[0];
    let text = news_one[1];
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = title;
    p.innerHTML = text;
    div.innerHTML = '';    
    div.append(h2, p);
    div.style.display = "block";
    container.insertAdjacentHTML('beforeend',`<div style="width:100%;height:15px;background-color: rgb(255, 188, 89)"><div>`);
    container.append(clone);
    news_btn = document.getElementById("new_btn");
}