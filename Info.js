import React from "react"

export default function Info(){
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Ryan Harris"/>
            <div id="infoText">
                <h1>Ryan Harris</h1>
                <h3>Frontend Developer</h3>
                <a href="">RyanHarrisWebsiteComingSoon</a>
            </div>
            <div id="btnHolder">
                <a href="" className="emailBtn">Email</a>
                <a href="" className="linkedBtn">LinkedIn</a>
            </div>
        </div>
    )
}