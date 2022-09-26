import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info.js"
import About from "./About.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"

const root = document.getElementById("root")

ReactDOM.render(
    <div>
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
    ,
    root
)