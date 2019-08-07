"use strict";

function langPopup()
{
    var lang = navigator.language;
    var header = document.getElementById("msg").innerHTML
    switch (lang)
    {
        case "es":
            header = "Spanish";
            break;
        case "de":
            header = "German";
            break;
        default:
            header = "English";
    }
}

window.onload = function()
{
    let params = "height=300, width=300, left=400, top=200"

    const btn = document.getElementById("langPopup");
    btn.onclick = function()
    {
        window.open("popup.html", "popup", params)
        langPopup();
    }
}