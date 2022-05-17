"use strict";
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// region sums
let region1_sum = 0;
    for (var i = 0; i < region1.length; i++) {
        region1_sum += region1[i];
    }

let region2_sum = 0;
    for (var i = 0; i < region2.length; i++) {
        region2_sum += region2[i];
    }

let region3_sum = 0;
    for (var i = 0; i < region3.length; i++) {
        region3_sum += region3[i];
    }

let region4_sum = 0;
    for (var i = 0; i < region4.length; i++) {
        region4_sum += region4[i];
    }

let region5_sum = 0;
    for (var i = 0; i < region5.length; i++) {
        region5_sum += region5[i];
    }

// total sum
let total_sum = 0;
    total_sum = (region1_sum + region2_sum + region3_sum + region4_sum + region5_sum);

// quarter totals
let quarter1 = 
    region1[0] + region2[0] + region3[0] + region4[0] + region5[0];

let quarter2 = 
    region1[1] + region2[1] + region3[1] + region4[1] + region5[1];

let quarter3 = 
    region1[2] + region2[2] + region3[2] + region4[2] + region5[2];

let quarter4 = 
    region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

// display information 
document.write(`<h2> Sales by Quarter </h2>
                Q1 : $${quarter1}<br>
                Q2 : $${quarter2}<br>
                Q3 : $${quarter3}<br>
                Q4 : $${quarter4}<br>
                <h2> Sales by Region </h2>
                Region 1: $${region1_sum}<br>
                Region 2: $${region2_sum}<br>
                Region 3: $${region3_sum}<br>
                Region 4: $${region4_sum}<br>
                Region 5: $${region5_sum}<br>
                <h2> Total Sales </h2>
                Total: $${total_sum}<br>`);
