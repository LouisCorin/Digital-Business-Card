import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"




export default function App() {
    return (   
        <div className="app--container">
            <Info />
            <div className="abt-int--container">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}