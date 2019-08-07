"use strict";


function infoAlert(name, address, cityState)
{
    alert("Name: " + name + "\n" + "Address: " + address + "\n" + "City/State: " + cityState )
}

window.onload = function()
{
    const allFields = document.querySelectorAll("input");

    const btn = document.getElementById("triggerAlert")
    btn.onclick = function()
    {
        let name = allFields[0].value;
        let address = allFields[1].value;
        let cityState = allFields[2].value;
        infoAlert(name, address, cityState)
    }

}