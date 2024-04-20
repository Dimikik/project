'use strict'
let login = document.getElementById('login');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let signUpBtn = document.getElementById('signUp');
let err = document.getElementById("err");

function Err(str){
    err.innerHTML = '';
    let err_str = `<p>${str}</p>`;
    err.insertAdjacentHTML("beforeend", err_str);
}

signUpBtn.onclick = (event) => {
    if (login.value.length < 6) Err('Логин слишком короткий');
    else if (password1.value.length < 8) Err('Пароль слишком короткий');
    else if (password1.value != password2.value) Err('Пароли не совпадают!');
    else if ((localStorage.getItem(login.value) == null) && (login.value.length != 0) && (password1.value.length != 0) && (password2.value.length != 0)) {
        localStorage.setItem(login.value, password1.value);
        window.location.replace('../authorization_page/authorization.html');
    }
}