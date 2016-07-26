import {add} from './app/Math.js';
import Canvas from './app/Canvas';

let canvas = new Canvas('#canvas-wrap');

canvas.draw();

console.log(add(1, 2, 3));