"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value

    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
        switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0: // midnight
                hours = 12;
                ampm = "AM";
        }
    }

    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());
    $("#ampm").textContent = ampm;
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const tickStopwatch = () => {
    milliseconds += 10;
    if (milliseconds == 1000) {
        seconds += 1;
        milliseconds = 0;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes = minutes + 1;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours = hours + 1;
    }

    $("#s_minutes").textContent = padSingleDigit(minutes);
    $("#s_seconds").textContent = padSingleDigit(seconds);
    $("#s_ms").textContent = padSingleDigit(milliseconds);

};


// event handler functions
const startStopwatch = evt => {
    evt.preventDefault();
    milliseconds += 10;
    stopwatchTimer = setInterval(tickStopwatch, 10);
};


const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopwatchTimer);
};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(stopStopwatch);
    // reset elapsed variables and clear stopwatch display
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    $("#s_ms").textContent = "000";
    $("#s_seconds").textContent = padSingleDigit(seconds);
    $("#s_minutes").textContent = padSingleDigit(minutes);
};

document.addEventListener("DOMContentLoaded", () => {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);

    // set up stopwatch event handlers
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});