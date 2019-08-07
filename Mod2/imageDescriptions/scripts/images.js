"use strict";

function redBorder(img)
{
    img.className = "redBorder"
}

function roundRedBorder(img)
{
    img.className = "roundedRedImg"
}


window.onload = function()
{
    let imageFiles = ["images/apple.jpg", "images/pear.jpg", "images/peach.jpg"]

    let imageDescriptions = ["An Apple", "A Pear", "A Peach"]

    let imageSlots = document.querySelectorAll("img");
    let len = imageSlots.length;
    for (let i = 0 ; i < len ; i++)
    {
        imageSlots[i].src = imageFiles[i];
        imageSlots[i].alt = imageDescriptions[i]
    }

    imageSlots.forEach(roundRedBorder)
}