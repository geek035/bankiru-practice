import React from 'react';

export default function InputCardsInfoForm({ setInputCardForm, cardListObject, setCardsListObject }) {
    return (
        <div className="input-form">
            <div className="input-form__header-wrapper">
                <h2 className="input-form__header">Поле ввода</h2>
                <button onClick={handleCloseButtonClick} 
                    className="input-form__exit-button">close</button>
            </div>
            <ul className="input-form__list-property">
                <li className="input-form__input-row">
                    <p className="input-form__property">name</p>
                    <input className="input-form__input-field" type="text" />
                </li>

                <li className="input-form__input-row">
                    <p className="input-form__property">logo</p>
                    <input className="input-form__input-field" type="text" />
                </li>

                <li className="input-form__input-row">
                    <p className="input-form__property">rate</p>
                    <input className="input-form__input-field" type="text" />
                </li>

                <li className="input-form__input-row">
                    <p className="input-form__property">period</p>
                    <input className="input-form__input-field" type="text" />
                </li>

                <li className="input-form__input-row">
                    <p className="input-form__property">amount</p>
                    <input className="input-form__input-field" type="text" />
                </li>

                <li className="input-form__input-row">
                    <p className="input-form__property">url</p>
                    <input className="input-form__input-field" type="text" />
                </li>
            </ul>

            <button onClick={ handleSendButtonClick } 
                className="input-form__send-button">Отправить</button>
        </div>
    );

    function handleSendButtonClick(e) {
        if (cardListObject.lenght >= 12) {
            alert("Максимальное количество карточек");
        } else {
            const inputFields = document.querySelectorAll(".input-form__input-field");
            let newObject = {
                lenght: cardListObject.lenght + 1,
                list: cardListObject.list.concat(
                    {
                        id: cardListObject.lenght + 1,
                        name: inputFields[0].value,
                        logo: inputFields[1].value,
                        rate: inputFields[2].value,
                        period: inputFields[3].value,
                        amount: inputFields[4].value,
                        url: inputFields[5].value,
                    }
                ),
            }
            
            setCardsListObject(newObject);
        }
    }

    function handleCloseButtonClick(e) {
        setInputCardForm(false);
    }
}