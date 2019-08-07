"use strict";

// Function loads the several buttons on the page
/*
*
* @param params (String) - holds a string of parameters for the window when it loads
* @param googleBtn (HTML element) - connects the google link in javascript to the html button
* @param theHartfordBtn (HTML element) - connects the hartford link in javascript to the html button
* @param w3cBtn (HTML element) - connects the W3Schools link in javascript to the html button
*
*/
window.onload = function()
{
    let params = "height=400, width=400, left=400, top=100";

    const googleBtn = document.getElementById("google");
    googleBtn.onclick = function()
    {
        window.open("https://www.google.com", "google", params)
    }

    const theHartfordBtn = document.getElementById("theHartford");
    theHartfordBtn.onclick = function()
    {
        window.open("https://www.thehartford.com", "the hartford", params)
    }

    const w3cbtn = document.getElementById("w3Schools");
    w3cbtn.onclick = function()
    {
        window.open("https://www.w3schools.com", "W3Schools", params)
    }
}
