document.querySelectorAll(".info-block__button").forEach(
    (but) => { but.addEventListener("click", (el) => {
            console.log(el.target.parentNode.querySelector(".info-block__banner .text-box__paragraph").textContent);
        } ); }
);