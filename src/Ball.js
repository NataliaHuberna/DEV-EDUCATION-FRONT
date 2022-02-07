class Ball {
    constructor(ctx, x, y, speedX, speedY, color, size) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.size = size;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.textAlign = 'center';
        this.ctx.font = `${this.size}px Arial`;
        this.ctx.fillStyle = 'black';
        this.ctx.textBaseline = 'middle';
        const date = new Date();
        this.ctx.fillText(date.getSeconds().toString(), this.x, this.y + 5 );
    }

    update(width, height) {
        this.x + this.size >= width && (this.speedX = -this.speedX);
        this.x - this.size <= 0 && (this.speedX = -this.speedX);
        this.y + this.size >= height && (this.speedY = -this.speedY);
        this.y - this.size <= 0 && (this.speedY = -this.speedY);
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

export default Ball;
