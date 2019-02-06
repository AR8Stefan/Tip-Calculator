// Calculating the Tip.
let calculateTip = () => {
	billAmount = document.getElementById("bill_amount").value;
	serviceQuality = document.getElementById("service_quality").value;
	numOfPeople = document.getElementById("people_amount").value;

// Validating input.
	if (billAmount === "" || numOfPeople === 0 ) {
		alert("Please enter values of: 'Bill' or 'Number of People Sharing'")
	}
	// End Validation

// Checks if user inputs 1 or multiple people into the sharing field.
	if (numOfPeople === "" || numOfPeople <= 1) {
		document.getElementById("each").style.display = "none";
		} else {
			document.getElementById("each").style.display = "block";
		}
	// End "each" Check

// Calculate Tip
	let total = (billAmount * serviceQuality) / numOfPeople;

// Round to two decimal places.
	total = Math.round(total * 100) / 100;

// Next line allows us to always have digits after the decimal point. 2 in this case.
	total = total.toFixed(2);

// Display the tip.
	document.getElementById("total_tip").style.display = "block";
	document.getElementById("tip").innerHTML = total;

};
// End Calculating Tip

// Hide Tip Amount on Load.
document.getElementById("total_tip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click to call Calculate Tip.
document.getElementById("calculate").onclick = () => {
	calculateTip();
};


