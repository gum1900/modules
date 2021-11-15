const name = 'square';

function draw(ctx, length, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, length, length);
	return {length: length, x: x, y: y, color: color};
}

function reportArea(length, listID) {
	let list = document.querySelector("ul#" + listID);
	if(list) {
		let li = document.createElement("li");
		li.textContent = "Area of Square with side " + length + " is " + (length*length) + ".";
		list.append(li);
	}
}

function reportPerimeter(length, listID) {
	let list = document.querySelector("ul#" + listID);
	if(list) {
		let li = document.createElement("li");
		li.textContent = "Perimeter of Square with side " + length + " is " + (4*length) + ".";
		list.append(li);
	}
}

export {name, draw, reportArea, reportPerimeter};
