"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = "AM";

    if (hours < 10) {
        hours = padSingleDigit(hours);
    }
    if (minutes < 10) {
        minutes = padSingleDigit(minutes);
    }
    if (seconds < 10) {
        seconds = padSingleDigit(seconds);
    }

    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
    }
    $("#hours").textContent = hours;
    $("#minutes").textContent = minutes;
    $("#seconds").textContent = seconds;
    $("#ampm").textContent = ampm;

};

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});