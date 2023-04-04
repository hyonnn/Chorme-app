const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const link=document.querySelector('a');

function onLoginBtnClick(event) {
    event.preventDefault();
    console.log(event);
}

function handleLinkClik(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener('submit', onLoginBtnClick);
link.addEventListener('click',handleLinkClik);