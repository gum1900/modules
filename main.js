import { Square } from './modules/square.js';
import * as Canvas from './modules/canvas.js';

let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let sq1 = new Square(myCanvas.ctx, 50, 75, 100, 'blue')
let square1 = sq1.draw();
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
