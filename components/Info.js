import React from "react";

export default function Info() {
    return (
    <div className="info--container">
        <img src="/louis-profile-pic.png" width="300px" height="auto" />
        <h1>Louis Corin</h1>
        <h2>Frontend Developer Student</h2>
        <h3>github.com/LouisCorin</h3>
        <div className="button--comp">
            <button className="email--comp">Email</button>
            <button className="github--comp">GitHub</button>
        </div>
    </div>
    )
}