const clock = document.querySelector("h2#clock");//h2タグにid = clockを取得

function getClock() {
    const date = new Date();//現在の日時を取得
    const hours = String(date.getHours()).padStart(2, "0");//2桁にするためにpadStartを使う
    const miniutes = String(date.getMinutes()).padStart(2, "0");//2桁にするためにpadStartを使う
    const seconds = String(date.getSeconds()).padStart(2, "0");//2桁にするためにpadStartを使う
    clock.innerText = `${hours}:${miniutes}:${seconds}`;//clock(h2タグにid = clock)の中身を書き換える
}

getClock();
setInterval(getClock, 1000);//1000ミリ秒ごとにgetClockを実行