import React from "react";
import { listLinksData } from "../constants";


const listLinks = listLinksData.map(item => 
    <li key={item.id}>
        <a href={item.url}className="link header__link">
            {item.header}
        </a>
    </li>
);

function HeaderListLinks({ setInputCardForm }) {
    return (
        <ul className="header__list-links">
            {listLinks}
            <button className="input-form__exit-button"
                onClick={handleFormOpenClick}>Добавить карточки</button>
        </ul>
    );

    function handleFormOpenClick() {
        setInputCardForm(true);
    }
}

export default function Header({ setInputCardForm }) {
    return (
        <header className="header">
            <nav className="header__nav-panel">

                <img className="header__burger-menu"
                    src="../images/header__burger-menu.svg" />

                <div className="header__list-links-wrapper">
                    <a href="#" className="header__logo">
                        <img src="../images/header__logo.svg" />
                    </a>
                    <HeaderListLinks setInputCardForm={setInputCardForm} />
                </div>
                <div className="header__list-icons">
                    <a href="#" className="header__map-icon">
                        <img src="../images/icon__map.svg" />
                    </a>
                    <a href="#" className="header__exit-icon">
                        <img src="../images/icon__enter.svg" />
                    </a>
                </div>
            </nav>
        </header>
    );
}