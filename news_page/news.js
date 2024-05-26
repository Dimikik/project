'use strict';

if (!(localStorage.getItem(localStorage.getItem("user")))) window.location.replace("../authorization_page/authorization.html");

if (localStorage.getItem("/books") == undefined) localStorage.setItem("/books", '[[["Новость про книги"],["книги"],["00000000"],[["books"]]]]');
if (localStorage.getItem("/anime") == undefined) localStorage.setItem("/anime", '[[["В 2026 году выйдет новое аниме «Призрак в доспехах» от авторов «Руки прочь от кинокружка!»"],["Science SARU («Руки прочь от кинокружка!», «Блюз машины времени о четырех с половиной татами»), только что купленной Toho, доверили новое аниме «Призрак в доспехах». Пока никаких подробностей, лишь короткий тизер. С сериалом на основе культовой манги Масамуне Широ японской студии помогут Bandai Namco Filmworks, Kodansha и Production I.G. Напомним, в прошлый раз франшизу дополнили достойным в плане сюжета, но не имеющим право называться аниме в части графики «Призраком в доспехах: СО_2045» для Netflix."],["00000001"],[["anime"]]]]');
if (localStorage.getItem("/humor") == undefined) localStorage.setItem("/humor", '[[["Новость про юмор"],["юмор"],["00000002"],[["humor"]]]]');
if (localStorage.getItem("/games") == undefined) localStorage.setItem("/games", '[[["Новость про игры"],["книги"],["00000003"],[["games"]]]]');
if (localStorage.getItem("/music") == undefined) localStorage.setItem("/music", '[[["Назван самый популярный музыкальный жанр среди россиян"],["Рок оказался самым востребованным жанром среди россиян. Его слушает каждый четвертый (24%) в нашей стране. Это следует из опроса ВЦИОМа. Согласно данным центра, чем моложе опрошенные, тем чаще в их плейлисте встречаются композиции в жанре рок (39% среди зумеров и младших миллениалов и только 2% среди представителей поколения оттепели). Отмечается, что чаще рок слушают мужчины (31% мужчин и 19% женщин). На втором месте по популярности — классическая музыка. Ее слушают 18% опрошенных, большинство из которых не относятся к зумерам.  Меньшинство респондентов слушают рэп — 6%. При этом он занимает третье место в рейтинге музыкальных предпочтений зумеров и младших миллениалов — 20–21%."],["00000004"],[["music"]]]]');
if (localStorage.getItem("/health") == undefined) localStorage.setItem("/health", '[[["Новость про здоровье"],["книги"],["00000005"],[["health"]]]]');
if (localStorage.getItem("/sport") == undefined) localStorage.setItem("/sport", '[[["Новость про спорт"],["книги"],["00000006"],[["sport"]]]]');
if (localStorage.getItem("/buety") == undefined) localStorage.setItem("/buety", '[[["Новость про красоту"],["книги"],["00000007"],[["buety"]]]]');
if (localStorage.getItem("/food") == undefined) localStorage.setItem("/food", '[[["Россияне сделали выбор между окрошкой на квасе и кефире"],["Две трети россиян предпочли окрошку на квасе. Об этом сообщается в пресс-релизе городской службы доставки еды «Кухня на районе», эксклюзивно предоставленном «Ленте.ру». В преддверии Дня окрошки компания опросила 1200 респондентов старше 18 лет по всей России. По результатам опроса выяснилось, что подавляющее число жителей страны сделали выбор в пользу окрошки с квасом и лишь четверть предпочитают в качестве основы холодного супа кефир. 11 процентов респондентов сообщили, что ничем не заливают блюдо и едят его как салат.87 процентов признались в любви к традиционному супу и всего пять процентов опрошенных заявили, что совсем не едят окрошку. Большинство россиян также назвали блюдо летним, но каждый десятый опрошенный сказал, что ест окрошку круглый год. Среди мясных ингредиентов лидирует вареная колбаса (76 процентов) и ветчина (38 процентов), однако часть респондентов используют вареное мясо, говяжий язык или копчености. Вегетарианская версия окрошки не пользуется популярностью: всего пять процентов заявили, что предпочитают есть суп без мяса. 86 процентов респондентов считают, что в окрошке должны быть свежие огурцы, только 14 процентов отдают предпочтение соленым. В качестве заправки россияне чаще всего используют зелень и сметану, за ними следуют майонез, хрен и горчица. Семь процентов опрошенных едят окрошку без заправки.Ранее сообщалось, что президент России Владимир Путин на торжественном приеме в Китае съел два куска утки по-пекински. По его словам, он планировал съесть только один кусок, но было так вкусно, что он не смог удержаться."],["00000008"],[["food"]]]]');
if (localStorage.getItem("/technologies") == undefined) localStorage.setItem("/technologies", '[[["Новость про технологии"],["книги"],["00000009"],[["technologies"]]]]');
if (localStorage.getItem("/cars") == undefined) localStorage.setItem("/cars", '[[["Новость про машины"],["книги"],["00000010"],[["cars"]]]]');
if (localStorage.getItem("/space") == undefined) localStorage.setItem("/space", '[[["Новость про космос"],["книги"],["00000011"],[["space"]]]]');
let shew_news = [];
let user = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
if (user[1] == undefined)  window.location.replace('../chosing_of_genres/index.html');
let container = document.getElementById('container');
let news_btn = document.getElementById("new_btn");
let chose_genres_btn = document.getElementById("chose_genre");
chose_genres_btn.onclick = (event) =>{
    window.location.replace("../chosing_of_genres/index.html")
}
let new_news_btn = document.getElementById("new_news");
new_news_btn.onclick = (event) =>{
    window.location.replace("../new_news_page/index.html");
}
let sign_out_btn = document.getElementById("sign_out");
sign_out_btn.onclick = (event) =>{
    localStorage.setItem("user", undefined);
    window.location.replace("../authorization_page/authorization.html");
}
let mygenres = user[1];
let myGenres = [];
for (let key in mygenres){
    if (mygenres[key]) myGenres.push(key);
}
const err = document.createElement('p');
err.innerHTML = "Новости для вас закончились";
const lane = document.createElement('div');
lane.style.height = '15px';
lane.style.width = '100%';
lane.style.backgroundColor = 'rgb(255, 188, 89)';
news_btn.onclick = (event) =>{
    let i;
    let div = document.getElementById("new");
    let news;
    let news_one;
    let genre;
    for(i = 10; i > 0; i--){
        genre = myGenres[Math.floor(Math.random() * myGenres.length)];
        news = JSON.parse(localStorage.getItem("/" + genre));
        news_one = news[Math.floor(Math.random() * news.length)];
        let id = news_one[2][0];
        if (shew_news.indexOf(news_one[2][0]) == -1){
            i = -1;
            shew_news.push(id);
            break;
        }
    }
    if(i == 0){
        div.innerHTML = '';
        div.appendChild(err);
    }
    else {
        let title = news_one[0];
        let text = news_one[1];
        let new_div = document.createElement('div')
        let h2 = document.createElement('h2');
        h2.innerHTML = title;
        h2.className = "title";
        let p = document.createElement('p');
        p.innerHTML = text;
        p.className = "text";
        new_div.appendChild(h2);
        new_div.appendChild(p);
        let genres = news_one[3];
        for (let i of genres){
            let one_genre = document.createElement('p');
            one_genre.innerHTML = i;
            one_genre.style.position = 'absolute';
            one_genre.style.right = '115px';
            one_genre.classList.add("genres");
            new_div.appendChild(one_genre);
        }
        new_div.insertAdjacentHTML("beforeend", `<div style="width: 100%; margin-top: 30px; height:15px; background-color: rgb(255, 188, 89);"></div>`);
        container.insertBefore(new_div, div);
    }
}