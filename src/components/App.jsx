import React from "react"
import Header from "./Header.jsx"
import MainComponent from "./MainComponent.jsx"
import Footer from './Footer.jsx'

export default function App() {
    const [inputCardForm, setInputCardForm] = React.useState(false);

    return (
        <>
            <Header 
                setInputCardForm={setInputCardForm}/>
            <MainComponent
                inputCardForm={inputCardForm}
                setInputCardForm={setInputCardForm}/>
            <Footer />
        </>
    );
}