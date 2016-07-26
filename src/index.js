import {add} from './app/Math.js'; // use with extension
import Canvas from './app/Canvas'; // use without extension

let canvas = new Canvas('#canvas-wrap');

canvas.draw();

console.log(add(1, 2, 3));