"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
$("#degree_label_1").innerText = label1Text
$("#degree_label_2").innerText = label2Text

$("#degrees_computed").value = '';
$("#degrees_entered").focus();
$("#message").innerText = "";

}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = (temp) => {   
	if ($("#to_celsius").checked) {
		if (isNaN($("#degrees_entered").value)) {
			$("#message").innerText = "Error: Please enter only numeric values!";
		}
		
		else {
			temp = parseInt($("#degrees_entered").value);
			$("#degrees_computed").value = Math.round(calculateCelsius(temp), 2);
			$("#message").innerText = "";
		}
	}
	if ($("#to_fahrenheit").checked){
		if (isNaN($("#degrees_entered").value)) {
			$("#message").innerText = "Error: Please enter only numeric values!";
		}
		else {
			temp = parseInt($("#degrees_entered").value);
			$("#degrees_computed").value = Math.round(calculateFahrenheit(temp), 2);
			$("#message").innerText = "";
		}
	}
}


const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});