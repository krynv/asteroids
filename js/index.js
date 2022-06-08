const FPS = 60;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const update = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

setInterval(update, 1000 / FPS);