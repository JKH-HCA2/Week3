"use strict";

function getTourData()
{
    let tours = 
    [
        { category: "Museum Tours", title: "A Touch Tour at the Smithsonian Air And Space Museum", price: 45.00},
        { category: "Museum Tours", title: "A Tour of TV Sets at the American History Museum", price: 15.00 },
        { category: "Museum Tours", title: "Dinosaurs are Alive at the Natural History Museum", price: 65.00 },
        { category: "Food Tours", title: "Squeezing Things at the Farmers Market", price: 12.00 },
        { category: "Food Tours", title: "Murder Mystery at the Vineyard", price: 32.00 },
        { category: "Food Tours", title: "101 Ways to Server Brussel Sprouts" , price: 8.00 },
        { category: "Adventure Tours", title: "Ziplining the Poconos", price: 115.00 },
        { category: "Adventure Tours", title: "Water Skiing the Amazon", price: 4015.00 },
        { category: "Adventure Tours", title: "Parasailing Iceland", price: 3215.00 },
        { category: "Adventure Tours", title: "Kayaking to Antarctica", price: 3910.00 },
        { category: "Adventure Tours", title: "National Zoo: How to Grab a Skunk by the Neck", price: 80.00 }
    ];
    return tours;
}

function getCategoryData(table)
{
    let tours = getTourData();

    let tour = document.getElementById("tourType").selectedIndex;
    let chosenTour = document.getElementsByTagName("option")[tour].value;


    let len = tours.length

    for (let i = 0; i < len; i++)
    {
        if (chosenTour == tours[i].category)
        {
            let row = table.insertRow(table.rows.length);

            let cell1 = row.insertCell(0);
            cell1.innerHTML = tours[i].title;
            let cell2 = row.insertCell(1);            
            cell2.innerHTML = tours[i].price.toFixed(2);
        }
    }
}

function getPriceData(table)
{
    let tours = getTourData();

    let price = document.getElementById("tourPrice").selectedIndex;

    let len = tours.length

    if (price == 1)
    {
        for (let i = 0; i < len; i++)
        {
            let cost = tours[i].price
            if (cost < 75)
            {
                let row = table.insertRow(table.rows.length);

                let cell1 = row.insertCell(0);
                cell1.innerHTML = tours[i].title;
                let cell2 = row.insertCell(1);            
                cell2.innerHTML = tours[i].price.toFixed(2);
            }
        }
    }
    else if (price == 2)
    {
        for (let i = 0; i < len; i++)
        {
            let cost = tours[i].price
            if (75 < cost && cost < 150)
            {
                let row = table.insertRow(table.rows.length);

                let cell1 = row.insertCell(0);
                cell1.innerHTML = tours[i].title;
                let cell2 = row.insertCell(1);            
                cell2.innerHTML = tours[i].price.toFixed(2);
            }
        }
    }
    else
    {
        for (let i = 0; i < len; i++)
        {
            let cost = tours[i].price
            if (cost > 150)
            {
                let row = table.insertRow(table.rows.length);

                let cell1 = row.insertCell(0);
                cell1.innerHTML = tours[i].title;
                let cell2 = row.insertCell(1);            
                cell2.innerHTML = tours[i].price.toFixed(2);
            }
        }
    }
}

function searchByRadio()
{
    if (document.getElementById("category").checked)
    {
        const selector1 = document.getElementById("tourType");
        selector1.style.display = "block";
        const selector2 = document.getElementById("tourPrice");
        selector2.style.display = "none";
    }
    else
    {
        const selector1 = document.getElementById("tourPrice");
        selector1.style.display = "block";
        const selector2 = document.getElementById("tourType");
        selector2.style.display = "none";
    }
}

function getHeadRow(table)
{
    let row = table.insertRow()

    let cell1 = row.insertCell(0);
    cell1.innerHTML = "Title";
    let cell2 = row.insertCell(1);
    cell2.innerHTML = "Price";
}

window.onload = function()
{
    let table = document.getElementById("tours");
    const btn = document.getElementById("showResults");
    btn.onclick = function()
    {
        if (document.getElementById("category").checked)
        {
            tours.innerHTML = "";
            getHeadRow(table);
            getCategoryData(table);
        }
        else
        {
            tours.innerHTML = "";
            getHeadRow(table);
            getPriceData(table);
        }
    }
}

