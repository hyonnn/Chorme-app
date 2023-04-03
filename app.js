const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLoginBtnClick(event) {
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener('submit', onLoginBtnClick);

onLoginBtnClick()