"use strict";


function getImages()
{
    let imageFiles = ["images/apple.jpg", "images/banana.jpg", "images/lemon.jpg", "images/lime.jpg", "images/orange.jpg", "images/peach.jpg", "images/pear.jpg", "images/pineapple.jpg"]
    let imageDescriptions = ["apple", "banana", "lemon", "lime", "orange", "peach", "pear", "pineapple"]

    let fruit = document.querySelector("select").selectedIndex;
    let chosenFruit = document.getElementsByTagName("option")[fruit].value;
    const locationDiv = document.getElementById("locationDiv");

    let len = imageDescriptions.length
    for (let i = 0; i < len; i++)
    {
        if (chosenFruit == imageDescriptions[i])
        {
            let img = document.createElement("img");
            img.src = imageFiles[i]
            img.alt = imageDescriptions[i];
            locationDiv.appendChild(img);
            break;
        }
    }



}

window.onload = function()
{
    const addBtn = document.getElementById("addImage");
    addBtn.onclick = getImages;

    const resetBtn = document.getElementById("resetAll");
    resetBtn.onclick = function()
    {
        locationDiv.innerHTML = "";
    }
}