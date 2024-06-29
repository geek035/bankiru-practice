import "./styleSass.scss"
import { makeRequests } from "./makeRequests";

document.querySelectorAll(".info-block__button").forEach(
    (but) => { but.addEventListener("click", (el) => {
            console.log(el.target.parentNode.querySelector(".info-block__banner .text-box__paragraph").textContent);
        } ); }
);

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
    maxRequests = 10;

   makeRequests(urls, maxRequests).then(console.log); 
});