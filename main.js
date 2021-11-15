import {name, draw, reportArea, reportPerimeter} as Square from './modules/square.js';
import {create, createReportList} as Canvas from './modules/canvas.js';

let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let square1 = Square.draw(myCanvas.ctx, 50, 75, 100, 'blue');
Square.reportArea(square1.length, reportList);
Sqaure.reportPerimeter(square1.length, reportList);
