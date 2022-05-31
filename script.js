const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

const rectArray = [];

for (let i = 0; i < 110; i++) {

    const randomX = Math.random() * canvas.width;
    const randomY = Math.random() * canvas.height;
    const randomWidth = Math.random() * 50;
    const randomHeight = Math.random() * 100;

    const randomR = Math.random() * 255;
    const randomG = Math.random() * 255;
    const randomB = Math.random() * 255;
    const randomA = Math.random();

    const randomVX = randomBetween(-1, 1);
    const randomVY = randomBetween(0, -1)

    const randomColor = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')'

    // context.fillStyle = 'rgba(' + randomR + ',' + randomG + ',' + randomB + ',' + randomA + ')'

    const rect = { x: randomX, y: randomY, width: randomWidth, height: randomHeight, color: randomColor, velX: randomVX, velY: randomVY };

    // context.fillRect(randomX,randomY,randomWidth,randomWHeight);

    rectArray.push(rect);
}


// setInterval(() => {
    
// }, 10);

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    for (const rect of rectArray) {
        context.fillStyle = rect.color;
        context.fillRect(rect.x, rect.y, rect.width, rect.height);
        rect.x = rect.x + rect.velX;
        rect.y = rect.y + rect.velY;
        if (rect.x < 0 || (rect.x + rect.width)>canvas.width){
            rect.velX = rect.velX * -1;
        }
        if (rect.y < 0 || (rect.y + rect.height)>canvas.height){
            rect.velY = rect.velY * -1;
        }
    }
    requestAnimationFrame(update)
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

requestAnimationFrame(update)