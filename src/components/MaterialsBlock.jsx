import React from 'react';
import { materialsBoxContentList } from '../constants';

const materialsContentElementsList = materialsBoxContentList.map(item =>
    <MaterialsBox key={item.id} content={item} />
)

function MaterialsBlockContent({ content }) {
    if (content.image !== null) {
        return (
            <>
                <div>
                    <img src={content.image} className="materials-block__image" />
                    <h3 className="materials-block__header">{content.headerText}</h3>
                </div>
                <p className="materials-block__data-text">20.05.2024</p>
            </>
        );
    } else {
        return (
            <>
                <h4 
                    className="materials-block__header materials-block__header_light">
                    {content.headerText}
                </h4>
                <p className="materials-block__data-text">{content.date}</p>
            </>
        );
    }
}

function MaterialsBox({ content }) {
    if (content.image !== null) {
        return (
            <div className="materials-block__box">
                <div className="materials-block__box-wrapper">
                    <MaterialsBlockContent content={content} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="materials-block__box
                materials-block__box-text-wrapper">
                <div className="materials-block__box-text">
                    <MaterialsBlockContent content={content} />
                </div>
            </div>
        );
    }
}

export default function MaterialsBlock() {
    return (
        <div className="frame">
            <div className="text-box">
                <h2>Полезные материалы</h2>
            </div>

            <section className="materials-block">
                <div className="materials-block__wrapper">
                    { materialsContentElementsList }
                </div>
            </section>

        </div>
    )
}