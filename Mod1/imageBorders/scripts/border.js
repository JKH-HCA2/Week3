"use strict";


function redBorders(allDivs)
{
    let len = allDivs.length
    for (let i = 0; i < len; i++)
    {
        allDivs[i].style.border = "2px solid red";
    }
}

window.onload = function()
{
    const allDivs = document.querySelectorAll("div > p");
    redBorders(allDivs)
}