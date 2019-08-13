"use strict";

window.onload = function () {
    let inputState = document.getElementById("inputState");
    let billAddress = document.getElementById("billingAddress")
    let billState = document.getElementById("billingState");
    let billCity = document.getElementById("billingCity");
    let billZip = document.getElementById("billingZip")

    const allInputTextFields = document.querySelectorAll("input[type='text']");

    let len = allInputTextFields.length;
    for (let i = 0; i < len; i++) {
        allInputTextFields[i].onfocus = function () {
            this.style.backgroundColor = "Moccasin";
        }
        allInputTextFields[i].onblur = function () {
            this.style.backgroundColor = "";
        }
    }

    const allInputNumFields = document.querySelectorAll("input[type='number']");
    let len2 = allInputNumFields.length;
    for (let i = 0; i < len2; i++) {
        allInputNumFields[i].onfocus = function () {
            this.style.backgroundColor = "Moccasin";
        }
        allInputNumFields[i].onblur = function () {
            this.style.backgroundColor = ""
        }
    }

    inputState.oninput = function () {
        inputState.value = inputState.value.toUpperCase();
    }


    billState.oninput = function () {
        billState.value = billState.value.toUpperCase();
    }


    let addressField = document.getElementById("billSelector")
    addressField.onchange = function () {
        let billForm = document.getElementById("billForm");
        if (billSelector.selectedIndex == "1") {

            billForm.style.display = "block";

            let req = document.createAttribute("required")
            billAddress.setAttributeNode(req);
            req = document.createAttribute("required")
            billState.setAttributeNode(req);
            req = document.createAttribute("required")
            billCity.setAttributeNode(req);
            req = document.createAttribute("required")
            billZip.setAttributeNode(req);

        }
        else {
            billForm.style.display = "none";
            billAddress.removeAttribute("required");
            billState.removeAttribute("required");
            billCity.removeAttribute("required");
            billZip.removeAttribute("required");
        }
    }


    const paymentForm = document.getElementById("masterForm")
    paymentForm.onsubmit = function () {
        let creditCard = document.getElementById("cardNum")
        let cardValidator = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;

        if (cardValidator.test(creditCard) == false) {
            alert("invalid card number")
            errorblock.style.display = "block";
        }
    }
}