"use strict";

window.onload = function()
{
    const btn = document.getElementById("inputBtn")
    btn.onclick = lookupId;
}

function lookupId()
{
    let ajaxId = document.getElementById("input1")
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let json = JSON.parse(this.responseText);
            let userIdSpan = document.getElementById("userIdSpan");
            userIdSpan.innerHTML = json.userId;
            let idSpan = document.getElementById("idSpan");
            idSpan.innerHTML = json.id;
            let titleBlock = document.getElementById("titleBlock");
            titleBlock.innerHTML = json.title;
            let completedSpan = document.getElementById("completedBlock");
            completedSpan.innerHTML = json.completed;
        }
    }
    let url = "https://jsonplaceholder.typicode.com/todos/" + ajaxId.value
    xhr.open("GET", url, true);
    xhr.send(null);
}