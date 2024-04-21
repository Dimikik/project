'use strict'
let login = document.getElementById('login');
let password = document.getElementById('password');
let signinBtn = document.getElementById('signIn');
let err = document.getElementById("err");

function Err(str){
    err.innerHTML = '';
    let err_str = `<p id="err_text">${str}</p>`;
    err.insertAdjacentHTML("beforeend", err_str);
}
signinBtn.onclick = (event) => {
    const user = JSON.parse(localStorage.getItem(login.value))
    if (!user) {
        if (login.value.trim() != "") {
            Err("Такой пользователь не найден");
        }
        else login.value = login.value.trim();
        login.value = login.value.trim();
        return;
    }
    
    if ((user[0]) == password.value){
        localStorage.setItem("user", login.value.trim());
        window.location.replace('../news_page/news.html');
    }
    else if (login.value.lenth == 0 || password.value == 0) null;
    else Err("Логин или пароль неверный!");
}
