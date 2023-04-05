const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");//inputタグを取得
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));//JSON.stringifyはオブジェクトを文字列に変換するメソッド
}

function deleteToDo(event) {//eventはイベントが発生した時に自動的に渡される
    const li = event.target.parentElement;//liタグを取得
    li.remove();//liタグを削除
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);//buttonタグがクリックされたらdeleteToDo関数を実行
    li.appendChild(span);//liタグの中にspanタグを追加
    li.appendChild(button);//liタグの中にbuttonタグを追加
    toDoList.appendChild(li);//toDoListの中にliタグを追加
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;//入力した値を取得
    toDoInput.value = "";//入力した値を空にする
    toDos.push(newTodo);//toDos配列にnewTodoを追加
    paintToDo(newTodo);
    saveToDos();
}



toDoForm.addEventListener("submit", handleTodoSubmit);//submitイベントが発生したらhandTodoSubmit関数を実行