const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");//inputタグを取得
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//JSON.stringifyはオブジェクトを文字列に変換するメソッド
}

function deleteToDo(event) {//eventはイベントが発生した時に自動的に渡される
    const li = event.target.parentElement;//liタグを取得
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//filterは配列の中身を一つずつ取り出して条件に合うものだけを残すメソッド
    saveToDos();//削除した後に保存する
    li.remove();//liタグを削除
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;//newTodoオブジェクトのtextプロパティをspanタグの中に追加
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);//toDos配列にnewTodoを追加
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit", handleTodoSubmit);//submitイベントが発生したらhandTodoSubmit関数を実行

const savedToDos = localStorage.getItem(TODOS_KEY);//todosというキーで保存されている値を取得

if (savedToDos !== null) {//todosというキーで保存されている値がnullでない場合
    const parsedToDos = JSON.parse(savedToDos);//JSON.parseは文字列をオブジェクトに変換するメソッド
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//forEachは配列の中身を一つずつ取り出す
}