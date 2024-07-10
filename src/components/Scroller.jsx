import React from 'react'

function Card({ card }) {
    return (
        <article key={card.id} className='info-block'>
            <div className="info-block__banner">
                <div className="info-block__text-field">
                    <img src={card.logo} />
                    <p className="text-box__paragraph text-box__paragraph_align_right">
                        {card.name}
                    </p>
                </div>
                <hr className="info-block__hover" />   
            </div>

            <ul className='info-block__list'>
                <li className="info-block__text-field text-box__paragraph">
                    <p>Ставка, %</p>
                    <p className="text-box__paragraph_highlight text-box__paragraph_align_right">
                        от {card.rate} %
                    </p>
                </li>
                <li className="info-block__text-field text-box__paragraph">
                    <p>Срок</p>
                    <p className="text-box__paragraph_bold text-box__paragraph_align_right">
                        {card.period} дн
                    </p>
                </li>
                <li className="info-block__text-field text-box__paragraph">
                    <p>Сумма</p>
                    <p className="text-box__paragraph_bold text-box__paragraph_align_right">
                        30 000-{card.amount} ₽
                    </p>
                </li>
            </ul>
            <a href={card.url} className="info-block__button">
                Открыть вклад
            </a>
        </article>
    );
}

export default function Scroller({ idxScroller, countCards, cardsListObject }) {
    let cardsListSlice = cardsListObject.list.slice(idxScroller * 4, idxScroller * 4 + countCards);
    let cardsElementsList = cardsListSlice.map(card => 
        <Card key={card.id} card={card} />
    )
    return (
        <div className="scroller">
            {cardsElementsList}
        </div>
    )
}