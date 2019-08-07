"use strict";

/*
* Description: function changes the alt text on an image if the
* image is missing alt text
*
* Author: Jeremy Han
*
* @param noAlt (Array) - a parsed list of images without alt text
*
*/
function graffiti(noAlt)
{
    let len = noAlt.length
    // for loop runs through the array and adds alt text to each image
    for (let i = 0; i < len; i++)
    {
        noAlt[i].alt = "graffiti image"
    }
}

/*
* Description: function changes the paragraph associated with each
* image to the images alt text
*
* Author: Jeremy Han
*
* @param images (Array) - a parsed list of all images
*
*/

function setParaText(images)
{
    let numImages = images.length
    // for loop runs through the array and changes p text associated
    // with each image
    for (let i = 0; i < numImages; i++)
    {
        let theId = "para" + images[i].id.substr(images[i].id.length - 1)
        document.getElementById(theId).innerHTML = images[i].alt;
    } 
}

window.onload = function()
{
    const noAlt = document.querySelectorAll("img:not([alt])")
    graffiti(noAlt);
    const images = document.images
    setParaText(images)
}