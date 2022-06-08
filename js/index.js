const FPS = 60;


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const shipWidth = canvas.width / 2;
const shipHeight = canvas.height / 2;
const shipSize = 15;
const shipAngle = 90 / 180 * Math.PI;
const ship = new Ship(shipWidth, shipHeight, shipSize, shipAngle);

const update = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ship.draw(ctx);
};

setInterval(update, 1000 / FPS);