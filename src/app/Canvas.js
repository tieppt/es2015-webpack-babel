
export default class Canvas {
    constructor(element) {
        if (element.getContext) {
            this.context = element.getContext('2d');
            this.element = element;
            this.parent = element.parentElement;
        } else {
            let canvas = document.createElement('canvas');
            this.context = canvas.getContext('2d');
            this.element = canvas;
            this.parent = document.querySelector(element);
        }
        this.element.width = 200;
        this.element.height = 200;
        this.parent.appendChild(this.element);
        this.width = this.element.width;
        this.height = this.element.height;
    }
    draw() {
        let x = this.width / 2;
        let y = this.height / 2;
        let radius = 75;
        let startAngle = 0 * Math.PI;
        let endAngle = 1.5 * Math.PI;
        let counterClockwise = false;

        this.context.beginPath();
        this.context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        this.context.lineWidth = 15;

        // line color
        this.context.strokeStyle = 'black';
        this.context.stroke();
    }
}