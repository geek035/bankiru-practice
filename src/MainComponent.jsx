import React from 'react';
import { frameTextList } from './constants';
import { cardsList } from './constants';
import MaterialsBlock from './MaterialsBlock.jsx';
import Scroller from './Scroller.jsx';
import InputCardsInfoForm from './InputCardsInfoForm.jsx';

function Frame({ isImageFrame, textBoxData, idxScroller, countCards, cardsListObject }) {
    return ( 
        <section className="frame">
            <div className="text-box">
                <h2 className="text-box__header">{textBoxData.headerText}</h2>
                <p className="text-box__paragraph">{textBoxData.paragraphText}</p>
            </div>
            <>
                {isImageFrame == true 
                    ? <img className="text-box__image"
                        src="../images/wallet.png"
                        alt="wallet" />
                    : <Scroller idxScroller={idxScroller}
                        countCards={countCards}
                        cardsListObject={cardsListObject} />   
                }
            </>
        </section>
    );    
}

export default function MainComponent({inputCardForm, setInputCardForm}) {
    const [cardsListObject, setCardsListObject] = React.useState({
        lenght: 9,
        list: cardsList,
    });

    console.log(cardsListObject);

    return (
        <main className="main">
            {inputCardForm && <InputCardsInfoForm
                setInputCardForm={ setInputCardForm }
                cardListObject={cardsListObject}
                setCardsListObject={setCardsListObject}/>}
            <Frame
                isImageFrame={true}
                textBoxData={frameTextList[0]}             
            />
            {createScrollerFramesList()}
            <MaterialsBlock />
        </main>
    );

    function createScrollerFramesList() {
        let list = [],
            counterCards = cardsListObject.lenght,
            idx = 1;

        while (counterCards > 0) {
            list.push(
                <Frame
                    isImageFrame={false}
                    textBoxData={frameTextList[idx]}
                    idxScroller={idx-1}
                    countCards={counterCards >= 4 ?  4 : counterCards }
                    cardsListObject={cardsListObject}
                    key={idx-1}
                />
            );
            counterCards -= 4;
            idx++;
        }
        return list;
    }
}