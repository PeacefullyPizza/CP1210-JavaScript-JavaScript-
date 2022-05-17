const $ = selector => document.querySelector(selector);

// function for making change
var makeChange = (cents) => { 
    var quarters = parseInt(cents / 25);
       cents = cents % 25;
    var dimes = parseInt(cents / 10);
       cents = cents % 10;
    var nickels = parseInt(cents / 5);
       cents = cents % 5;
    var pennies = parseInt(cents / 1);
    
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;

};
// gets user entry and calls makeChange function
var processEntry = () => { 
    var cents = parseInt($("#cents").value);
        if (cents >= 0 && cents <=99) {
            makeChange(cents);
            $("#cents").value = '';
        }
    // if user value is NaN call an error
    if (isNaN(cents)) {
        alert("Please enter a number between 0 and 99.");
    }
    
};
    document.addEventListener("DOMContentLoaded", () => {
        // add event handlers
        $("#calculate").addEventListener("click", processEntry);
          })
