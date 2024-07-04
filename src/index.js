import { makeRequests } from "./makeRequests";
import { cardsList, drawCards, drawing } from "./cardList";
import { createRoot } from "react-dom/client";

import "./styleSass.scss"
import App from './App.jsx'




drawCards(cardsList);

document.querySelectorAll(".info-block__button").forEach(
    (but) => { but.addEventListener("click", (el) => {
            console.log(el.target.parentNode.querySelector(".info-block__banner .text-box__paragraph").textContent);
        } ); }
);

document.querySelector(".header .header__link").addEventListener("click", el => {
    document.querySelector(".input-form").classList.add("input-form_shown");
});

document.querySelector(".input-form__exit-button").addEventListener("click", el => {
    document.querySelector(".input-form").className = "input-form";
});

document.querySelector(".input-form__send-button").addEventListener("click", el => {
    const inputFields = document.querySelectorAll(".input-form__input-field");

    cardsList.push(
        {
            id: cardsList.length + 1,
            name: inputFields[0].value,
            logo: inputFields[1].value,
            rate: inputFields[2].value,
            period: inputFields[3].value,
            amount: inputFields[4].value,
            url: inputFields[5].value,
        }
    );
    
    if (cardsList.length > 12) {
        alert("Максимальное количество карточек на странице. Данные не отрисовались");
    } else {
        const scrollers = document.querySelectorAll(".scroller"),
            scroller = scrollers[scrollers.length - 1];
        console.log(scroller);
        drawing(scroller, cardsList, cardsList.length);
    }

});

document.querySelector(".info-block__button").addEventListener("click", (el) => {
    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3',
        'https://jsonplaceholder.typicode.com/posts/4',
        'https://jsonplaceholder.typicode.com/posts/5',
        'https://jsonplaceholder.typicode.com/posts/6',
        'https://jsonplaceholder.typicode.com/posts/7',
        'https://jsonplaceholder.typicode.com/posts/8',
        'https://jsonplaceholder.typicode.com/posts/9',
        'https://jsonplaceholder.typicode.com/posts/10',
    ],
    maxRequests = 5;

   makeRequests(urls, maxRequests).then(console.log); 
});