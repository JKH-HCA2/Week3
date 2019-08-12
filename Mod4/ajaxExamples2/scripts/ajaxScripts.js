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
            let albumIdSpan = document.getElementById("albumId");
            albumIdSpan.innerHTML = json.albumId;
            let idSpan = document.getElementById("id");
            idSpan.innerHTML = json.id;
            let titleSpan = document.getElementById("title");
            titleSpan.innerHTML = json.title;
            let urlSpan = document.getElementById("url");
            urlSpan.innerHTML = '<img src="' + json.url + '" />'
            let thumbnailSpan = document.getElementById("thumbnail");
            thumbnailSpan.innerHTML = '<img src="' + json.thumbnailUrl + '" />';
        }
    }
    let url = "https://jsonplaceholder.typicode.com/photos/" + ajaxId.value
    xhr.open("GET", url, true);
    xhr.send(null);
}