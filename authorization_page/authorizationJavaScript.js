'use strict'
let login = document.getElementById('login');
let password = document.getElementById('password');
let signinBtn = document.getElementById('signIn');
signinBtn.onclick = (event) => {
    if (localStorage.getItem(login.value) == password.value){
        window.location.replace('registration.html');
    }
    else if (login.value.lenth == 0 || password.value == 0){}
    else if (localStorage.getItem(login.value) != password.value) alert("Логин или пароль неверный!")
}
