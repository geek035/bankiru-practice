import React from 'react'
import { footerListUrl } from '../constants'

const footerListElements = footerListUrl.map(item => 
    <li key={item.id}>
        <a href={item.url}>
            <img src={item.image} />
        </a>
    </li>
)

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__info-box">
                    <img className="footer__logo" src="../images/footer__logo.svg" />
                    <p className="text-box__paragraph">Самый большой финансовый маркетплейс в России</p>
                </div>
                <ul className="footer__list-icons">
                    { footerListElements }
                </ul>
            </div>

        </footer>
    );
}