"use strict";

const $ = selector => document.querySelector(selector);

// function for clearing textboxes
const clearEntries = () => {
    document.getElementById("subtotal").value = "";
    document.getElementById("tax_rate").value = "";
    document.getElementById("sales_tax").value = "";
    document.getElementById("total").value = "";
    focusAndSelect("#subtotal");
}

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// function for getting Subtotal and Tax Rate and calculating the Sales Tax & Total
const processEntries = () => {
    
    const subtotal = parseFloat($("#subtotal").value);
    const tax_rate = parseFloat($("#tax_rate").value);
    
    if ( subtotal < 0 || subtotal > 10000 ) {
        alert("Subtotal must be between 0 & 10000!");} // thorws error if not between 0 & 10000
    else if ( tax_rate < 0 || tax_rate > 12) {
        alert("Tax Rate must be between 0 & 12!");} // thorws error if not between 0 & 12
    else {
        var sales_tax = subtotal * (tax_rate / 100);
        sales_tax = parseFloat( sales_tax.toFixed(2) );
    var total = subtotal + sales_tax;
    $("#sales_tax").value = sales_tax;
    $("#total").value = total.toFixed(2);}
    $("#subtotal").select();
}
    document.addEventListener("DOMContentLoaded", () => {
        // add event handlers
        $("#subtotal").select();
        $("#calculate").addEventListener("click", processEntries);
        $("#clear").addEventListener("click", clearEntries);
        $("#subtotal").addEventListener("dblclick", clearEntries);
        $("#tax_rate").addEventListener("dblclick", clearEntries);
    })