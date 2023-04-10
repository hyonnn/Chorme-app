const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; ///変数名を揃えるため、あとで変更しやすいように変数に代入しておく

function onLoginSubmit(event) {
    event.preventDefault(); ///ブラウザのデフォルトの動作を止める
    loginForm.classList.add(HIDDEN_CLASSNAME); ///loginFormを隠す
    const username = loginInput.value; ///loginInputのvalueをを変数usernameに代入
    localStorage.setItem(USERNAME_KEY, username); ///usernameというKeynameで変数usernameの値を保存
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `こんにちは！${username}さん`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);///usernameというKeynameで保存されている値を取得

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);///submitボタンが押されたらonLoginSubmitを実行
} else {
   paintGreetings(savedUsername)
}