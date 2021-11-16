class Square {
/*    const name = 'square';
    let ctx, length, x, y, color;
*/
    constructor(ctx, length, x, y, color) {
        this.ctx = ctx, this.length = length, this.x = x, this.y = y, this.color = color; 
    }


    draw() {
        this.ctx.fillStyle = color;
        ctx.fillRect(x, y, length, length);
        return {length: length, x: x, y: y, color: color};
    }

    static reportArea(length, listID) {
        let list = document.querySelector("ul#" + listID);
        if(list) {
            let li = document.createElement("li");
            li.textContent = "Area of Square with side " + length + " is " + (length*length) + ".";
            list.append(li);
        }
    }

    static reportPerimeter(length, listID) {
        let list = document.querySelector("ul#" + listID);
        if(list) {
            let li = document.createElement("li");
            li.textContent = "Perimeter of Square with side " + length + " is " + (4*length) + ".";
            list.append(li);
        }
    }
}

export { Square };
