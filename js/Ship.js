class Ship {
    constructor(x, y, r, a) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.a = a;
    }

    draw(ctx) {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.r / 20;

        ctx.beginPath();
        ctx.moveTo(
            this.x + this.r * Math.cos(this.a),
            this.y - this.r * Math.sin(this.a)
        ); // nose
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) - Math.cos(this.a))
        ); // rear left
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) + Math.cos(this.a))
        ); // rear right

        ctx.closePath(); // cheat and close it without actually telling it where to draw
        ctx.stroke();
    }
}