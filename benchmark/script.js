var t0 = performance.now();

for (var x = 0; x < 10; x++) {
	var bignums = [3];
	var littlenums = [2];
	var sum = 0;
	for (var i = 1; i < 50000000; i++) {
		bignums.push(bignums[i - 1] * 3);
		littlenums.push(littlenums[i - 1] *2);
		sum += bignums[i] + littlenums[i];
	}
	for (var i = 0; i < 5000000; i += 10) {
		var difference = bignums[i] - littlenums[i];
		sum -= Math.sqrt(difference);
	}
}

var t1 = performance.now();
var score = Math.floor(100 * Math.log(t1 - t0));
document.getElementById("output").innerHTML = score;