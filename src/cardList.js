export const drawCards = async function (cardsList) {
  const scrollers = document.querySelectorAll(".scroller");

  let idx = 0,
    cardId = cardsList.length == 0 ? -1 : 1;

  console.log(scrollers);
  console.log(cardsList);

  while (idx < 3 && cardId !== -1) {
    await drawing(scrollers[idx], cardsList, cardId);
    if (cardId % 4 == 0) {
      ++idx;
    }
    cardId = cardId == cardsList.length ? -1 : cardId + 1;
  }
};

export async function drawing(scroller, cardsList, cardId) {
  let form = document.createElement("article");
  form.classList.add("info-block");
  form.innerHTML = `
        <div class="info-block__banner">
            <div class="info-block__text-field">
                <img src="${cardsList[cardId - 1].logo}" />

                <p class="text-box__paragraph 
                    text-box__paragraph_align_right">
                    ${cardsList[cardId - 1].name}
                </p>
            </div>
            <hr class="info-block__hover" color="#ECEFF1" size="3" />
        </div>

        <ul class="info-block__list">
            <li class="info-block__text-field text-box__paragraph">
                <p>Ставка, %</p>
                <p class="text-box__paragraph_highlight
                    text-box__paragraph_align_right">
                    от ${cardsList[cardId - 1].rate}%
                </p>
            </li>

            <li class="info-block__text-field text-box__paragraph">
                <p>Срок</p>
                <p class="text-box__paragraph_bold
                    text-box__paragraph_align_right">
                    ${cardsList[cardId - 1].period}.
                </p>
            </li>

            <li class="info-block__text-field text-box__paragraph">
                <p>Сумма</p>
                <p class="text-box__paragraph_bold
                    text-box__paragraph_align_right">
                    30 000-${cardsList[cardId - 1].amount} &#8381;
                </p>
            </li>
      </ul>

      <a href="${
        cardsList[cardId - 1].url
      }" class="info-block__button">Открыть вклад</a>
    `;
  scroller.append(form);
}