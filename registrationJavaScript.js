'use strict'
let login = document.getElementById('login');
let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let signUpBtn = document.getElementById('signUp');

signUpBtn.onclick = (event) => {
    if (password1.value != password2.value) alert('Пароли не совпалают!');
    else if (login.value.lenth < 6) alert('Логин слишком короткий');
    else if (password1.value.lenth < 8) alert('Пароль слишком короткий');
    else if (localStorage.getItem(login.value) == null) {
        localStorage.setItem(login.value, password1.value);
        window.location.replace('authorization.html');
    }
}