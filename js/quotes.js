const quotes = [
    {
    quote: "古池や 蛙飛び込む 水の音",
    author: "松尾芭蕉",
    },
    {
    quote: "夏草や 兵どもが 夢の跡",
    author: "松尾芭蕉",
    },
    {
    quote: "海暮れて 烏の寝どころぞ わびしき",
    author: "山頭火",
    },
    {
    quote: "夏草の 野分に添う 夜の風",
    author: "種田山頭火",
    },
    {
    quote: "春の夜 桜の花の 白きこと",
    author: "与謝野晶子",
    },
    {
    quote: "ゆきのひは 人目もこらす 水の色",
    author: "志賀直哉",
    },
    {
    quote: "猫の恋 やがて春の 雪のごとく",
    author: "佐藤春夫",
    },
    {
    quote: "秋風の たなびく雲の 絶え間より",
    author: "河東碧梧桐",
    },
    {
    quote: "落葉や 身も心も うららかに",
    author: "小林一茶",
    },
    {
    quote: "月見れば ちぢにものこそ 悲しけれ",
    author: "紀貫之",
    },
    {
    quote: "初雪の 積もらぬ世に 住みたくは",
    author: "高杉晋作",
    },
    {
    quote: "山桜 花の白雲 かすみか雲",
    author: "大江千里",
    },
    {
    quote: "枯葉散る 淋しき町や 今日の秋",
    author: "三橋鷹女",
    },
    {
    quote: "春風や 闘志を燃やす 旗の先",
    author: "加藤楸邨",
    },
    {
    quote: "春雨や つるべとりゆく 人の跡",
    author: "松尾芭蕉",
    },
    {
    quote: "夕日を 松の間に見る 寺の秋",
    author: "釈迦坊",
    },
    {
    quote: "白露や 月の光に 包まれて",
    author: "島木赤彦",
    },
    {
    quote: "夜汽車の 窓の外の 春の月",
    author: "種田山頭火",
    },
    {
    quote: "冬枯れの 木々の間より 春の風",
    author: "葉山嘉樹",
    },
    {
    quote: "渡り鳥 空に消えゆく 秋の空",
    author: "室生犀星",
    },
];
    
const quote = document.querySelector("#quote span:first-child");//span:first-childはspanの中の一番最初のものを取得
const author = document.querySelector("#quote span:last-child");//span:last-childはspanの中の一番最後のものを取得
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];//quotesの中からランダムに一つ選ぶ

quote.innerText = todaysQuote.quote;//quote(span:first-child)の中身を書き換える
author.innerText = todaysQuote.author;//quote(span:first-child)の中身を書き換える