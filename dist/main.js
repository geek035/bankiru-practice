(()=>{"use strict";const o=(e,t)=>new Promise(((s,c)=>{let p=0,l=[];new Promise(((o,s)=>{for(;p<t&&e.length;)l.push(fetch(e.pop())),++p;e.length?o():s()})).then((s=>{Promise.race(l).then((s=>{--p,o(e,t)}),(o=>{c(o)}))}),(o=>{s(l.reverse())}))}));document.querySelectorAll(".info-block__button").forEach((o=>{o.addEventListener("click",(o=>{console.log(o.target.parentNode.querySelector(".info-block__banner .text-box__paragraph").textContent)}))})),document.querySelector(".info-block__button").addEventListener("click",(e=>{o(["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/posts/3","https://jsonplaceholder.typicode.com/posts/4","https://jsonplaceholder.typicode.com/posts/5","https://jsonplaceholder.typicode.com/posts/6","https://jsonplaceholder.typicode.com/posts/7","https://jsonplaceholder.typicode.com/posts/8","https://jsonplaceholder.typicode.com/posts/9","https://jsonplaceholder.typicode.com/posts/10"],10).then(console.log)}))})();