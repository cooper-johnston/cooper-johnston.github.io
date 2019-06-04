var numParties = 0;
var numSeats = 0;
var numModify = 0;
var formB = document.getElementById("formb");

//Utility functions

function largestIndex(theArray) {
	var largest = Math.max.apply(null, theArray);
	return theArray.indexOf(largest);
}

//Button-triggered functions

function showFormB() {
	document.getElementById("forma").style.display = "none";
	
	numParties = document.getElementById("partynum").value;
	numSeats = document.getElementById("seatnum").value;
	numModify = parseInt(document.getElementById("modifynum").value);

	var formContent = "<ul><li>Total Seats: " + numSeats + "</li><li>Modifier: " + numModify + "</li></ul>";
	for (var i = 0; i < numParties; i ++) {
		x = i + 1;
		formContent += "<span class='formfield'><p>Party/Group " + x + " Votes</p><input type='number' id='votes_party" + i + "'></span>";
	}
	formContent += "<button onclick='calculateSeats()'>Calculate</button>";

	formB.innerHTML = formContent;
	formB.style.display = "block";
}

function calculateSeats() {
	formB.style.display = "none";
	console.log("Beggining seat calculations...");

	var currentNums = [];
	var votes = [];
	var divisors = [];
	var seats = [];
	for (var i = 0; i < numParties; i ++) {
		votes.push(document.getElementById("votes_party" + i).value);
		divisors.push(numModify);
		currentNums.push(0);
		seats.push(0);
	}

	for (var assigned = 0; assigned < numSeats; assigned ++) {
		for (var i = 0; i < numParties; i ++) {
			currentNums[i] = votes[i] / divisors[i];
		}
		console.log(currentNums);

		winner = largestIndex(currentNums);
		seats[winner] ++;
		if (divisors[winner] < 3) {
			divisors[winner] = 3;
		} else {
			divisors[winner] += 2;
		}
		console.log(divisors);
	}

	var resultContent = "<h3>Results</h3><ul>";
	for (var i = 0; i < numParties; i ++) {
		x = i + 1;
		resultContent += "<li>Party/Group " + x + ": " + seats[i] + "</li>";
	}
	resultContent += "</ul>"

	var results = document.getElementById("results");
	results.innerHTML = resultContent;
	results.style.display = "block";
}