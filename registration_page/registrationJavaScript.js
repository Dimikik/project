'use strict'
if (!(localStorage.getItem("user"))) window.location.replace("../news_page/news.html");
let login = document.getElementById('login');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let signUpBtn = document.getElementById('signUp');
let err = document.getElementById("err");

function Err(str){
    err.innerHTML = '';
    let err_str = `<p id="err_text">${str}</p>`;
    err.insertAdjacentHTML("beforeend", err_str);
}

signUpBtn.onclick = (event) => {
    if ((localStorage.getItem(login.value) != null)) Err("Такой логин уже есть");
    else if (login.value.trim().length == 0 && password1.value.length == 0 && password2.value.length == 0) null;
    else if (login.value.trim().length < 6) Err('Логин слишком короткий');
    else if (password1.value.trim().length < 8) Err('Пароль слишком короткий');
    else if (password1.value != password2.value) Err('Пароли не совпадают!');
    else if ((localStorage.getItem(login.value) == null) && (login.value.trim().length != 0) && (password1.value.length != 0) && (password2.value.length != 0)) {
        localStorage.setItem(login.value.trim(), JSON.stringify([password1.value]));
        window.location.replace('../authorization_page/authorization.html');
    }
    login.value = login.value.trim()
}