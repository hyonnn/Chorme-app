const images = ["0.jpg","1.jpg","2.jpg"]//imagesフォルダにある画像を配列に格納
const chosenImage = images[Math.floor(Math.random() * images.length)];//imagesの中からランダムに一つ選ぶ
const bgImage = document.createElement("img");//imgタグを作成

bgImage.src = `img/${chosenImage}`;//imgタグのsrc属性にchosenImageを代入
document.body.appendChild(bgImage);//bodyの中にimgタグを追加
bgImage.classList.add("backgroundImg");//imgタグにbackgroundImgクラスを追加