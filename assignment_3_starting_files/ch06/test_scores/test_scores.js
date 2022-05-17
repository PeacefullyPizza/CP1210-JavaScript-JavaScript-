"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const addScore = () => {
	const newName = $("#name").value;
	const newScore = parseInt($("#score").value);
	if ($("#name").value != "" && $("#score").value != "" && $("#score").value >= 0 && $("#score").value <= 100) {
		scores[scores.length] = newScore;
		$("#scoreError").innerText = "";
		names[names.length] = newName;
		$("#nameError").innerText = "";
	} 
	else {
		$("#nameError").innerText = "Please enter a name!";
		$("#scoreError").innerText = "Enter score between 0 & 100!"
	}
}

const displayResults = () => {
	let total = 0,
		averageScore = 0,
		highestScore = 0;
	let topStudent = '';

	for (let i in scores) {
		total += scores[i];
	}
	averageScore = total / scores.length;

	for (let i in scores) {
		if (scores[i] > highestScore) {
			highestScore = scores[i];
			topStudent = names[i];
		}
	}

	const newHeader = document.createElement("h2");
	const h2Text = document.createTextNode("Results");
	newHeader.appendChild(h2Text);

	const newParagraph = document.createElement("p");
	const newLineElement = document.createElement("br");
	const averageScoreText = document.createTextNode("Average score = " + averageScore);
	const highestScoreText = document.createTextNode("High score = " + topStudent + " with a score of " + highestScore);

	newParagraph.appendChild(averageScoreText);
	newParagraph.appendChild(newLineElement);
	newParagraph.appendChild(highestScoreText)

	const emptyH2 = document.createElement("h2");
	const emptyText = document.createTextNode("");
	emptyH2.appendChild(emptyText);


	if ($("#results").innerHTML != '\n\n\t\t') {
		$("#results").innerHTML = '\n\n\t\t';
		$("#results").appendChild(newHeader);
		$("#results").appendChild(newParagraph);
	} else {
		$("#results").appendChild(newHeader);
		$("#results").appendChild(newParagraph);
	}
	total = 0;
	averageScore = 0;
}

const displayScores = () => {
	const scoreH2 = document.createElement("h2");
	const scoreH2Text = document.createTextNode("Scores");
	scoreH2.appendChild(scoreH2Text);
	$("#scores").appendChild(scoreH2);

	for (let i in names) {
		const scoresParagraph = document.createElement("p");
		const scoresLineElement = document.createElement("br");
		const blank = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
		const scoresText = document.createTextNode(names[i] + blank + blank + blank + blank + blank + scores[i]);
		scoresParagraph.appendChild(scoresText);
		scoresParagraph.appendChild(scoresLineElement);
		$("#scores").appendChild(scoresParagraph);
	}
}



document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
}
);