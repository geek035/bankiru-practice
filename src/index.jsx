import React from 'react'
import App from './components/App.jsx'
import ReactDom from "react-dom/client"

import "./styleSass.scss";

const rootElement = document.querySelector(".page");
const root = ReactDom.createRoot(rootElement);

root.render(<App />);