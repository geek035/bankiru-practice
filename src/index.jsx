import React from 'react'
import App from './App.jsx'
import ReactDom from "react-dom/client"

import "./styles/root.scss";

const rootElement = document.body;
const root = ReactDom.createRoot(rootElement);

root.render(<App />);