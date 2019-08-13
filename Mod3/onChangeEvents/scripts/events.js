"use strict";

window.onload = function()
{
    let msgDiv = document.getElementById("textField");
    let counter = document.getElementById("counter");

    msgDiv.onkeypress = function(e)
    {
        let key = e.charCode ? e.charCode : e.keyCode;
        if (key > 47 && key < 58)
        {
            return false;
        }
    }
    
    msgDiv.oninput = function()
    {
        
        let str = msgDiv.value.length        
        let remChar = 50 - Number(str)
        counter.innerHTML = remChar
    }
}