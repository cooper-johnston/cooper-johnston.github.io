const Fractal = {
	draw: (canvas, points, size) => {
		const midpoint = [window.innerWidth / 2, window.innerHeight / 2]; //Find the midpoint

		//Set up canvas

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const ctx = canvas.getContext("2d");

		ctx.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas

		ctx.lineWidth = "1";
		ctx.strokeStyle = "white";
		ctx.beginPath();
		ctx.moveTo(midpoint[0], midpoint[1]);

		//Create path to each point

		points.forEach((point, index) => {
			if (index === 0) return; //Ignore the first point

			let rendered = [
				midpoint[0] + (size * point[0]),
				midpoint[1] - (size * point[1])
			];
			ctx.lineTo(rendered[0], rendered[1]);
		});

		ctx.stroke(); //Draw the line
	},

	getPoints: (prevPoints) => {
		//Get first and last points

		const firstPoint = prevPoints[0];
		const lastPoint = prevPoints[prevPoints.length - 1];

		//Get the new points

		var newPoints = [];
		prevPoints.forEach((point) => {
			let newPoint = [
				-1 * point[1] + lastPoint[1] + lastPoint[0],
				point[0] - lastPoint[0] + lastPoint[1]
			];

			newPoints.push(newPoint);
		});

		return prevPoints.concat(newPoints.reverse().slice(1)); //Return all points
	},

	bulkGetPoints: (iterations) => {
		var points = [[0, 0], [-1, 0]]; //Initial points
		for (let i = 0; i < iterations; i ++) points = Fractal.getPoints(points); //Get new points i times
		return points; //Return al points
	}
};