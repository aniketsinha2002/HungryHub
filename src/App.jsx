import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js"
import Body from "./components/Body.js"

//Props => dynamically passes data to a functional component, passing a argument to a function
//Passing props to a component
//When we need to dynamically pass a data to a component -> We'll use props

const AppLayout = () => (
    <div className="app">
        {Header()}
        {Body()}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<AppLayout/>);


 