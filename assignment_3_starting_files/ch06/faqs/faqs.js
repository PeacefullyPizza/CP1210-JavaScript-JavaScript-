"use strict";
const $ = selector => document.querySelector(selector);
const h2Elements = document.querySelectorAll("#faqs h2");
// the event handler for the click event of each h2 element
const toggle = evt => {

	const h2Element = evt.currentTarget; // get the clicked h2
	const divElement = h2Element.nextElementSibling; // get h2's sibling div

	h2Element.classList.toggle("minus");
	divElement.classList.toggle("open");
	
	for (let h2 of h2Elements) {
		if (h2.getAttribute = h2) {
			h2.removeAttribute("minus");
			h2.nextElementSibling.removeAttribute("open");
		}
	}
	evt.preventDefault(); // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");

	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}

	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});