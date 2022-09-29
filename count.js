"use strict";

const counter = document.getElementById("Counter");

const minusOne = () => {
    Counter.value = parseInt(Counter.value) - 1;
}

const plusOne = () => {
    Counter.value = parseInt(Counter.value) + 1;
}

const reset = () => { 
    Counter.value = "0";
}

const minusFive = () => {
    Counter.value = parseInt(Counter.value) -5;
}

const plusFive = () => {
    Counter.value = parseInt(Counter.value) + 5;
}

const minusTen = () => {
    Counter.value = parseInt(Counter.value) - 10;
}

const plusTen = () => {
    Counter.value = parseInt(Counter.value) + 10;
}

