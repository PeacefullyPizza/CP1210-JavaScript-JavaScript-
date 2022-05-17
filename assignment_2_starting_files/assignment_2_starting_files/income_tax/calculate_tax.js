"use strict";
const $ = selector => document.querySelector(selector);

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

var calculateTax = (income) => { // function for finding value with income amount
	if (income <= 9875){
		const tax = income * 0.10;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 9875 && income <= 40125) {
		const tax = ((income - 9875) * 0.12) + 987.5; 
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 40125 && income <= 85525) {
		var tax = ((income - 40125) * 0.22) + 4617.5;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 85525 && income <= 163300) {
		var tax = ((income - 85525) * 0.24) + 14605.5;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 163300 && income <= 207350) {
		var tax = ((income - 163300) * 0.32) + 33271.5;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 207350 && income <= 518400) {
		var tax = ((income - 207350) * 0.35) + 47367.5;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	else if (income > 518400) {
		var tax = ((income - 518400) * 0.37) + 156235;
		$("#tax").value = tax.toFixed(2); // set to int 
	}
	
};

const processEntry = () => {
	const income = parseFloat($("#income").value); // get user value
	if (income >= 0 ) { // if income greater than or equal to 0
		calculateTax(income); // call calculate function
		$("#income").value = '';
		$("#income").focus();
	}
	if (isNaN(income)) {
	alert("Income value must be greater than 0!"); // error if NaN
	$("#income").focus(); // focus first box
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	$("#income").focus(); // focus first box

});