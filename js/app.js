const body = document.querySelector('body');

class Heart {
  constructor(color, position, speed) {
    this.color = color;
    this.position = position;
    this.speed = speed;
  }
  draw() {
    let timerId;
    let top = 0;
    const divElement = document.createElement('div');
    divElement.classList.add('heart');
    divElement.style.left = this.position + 'px';
    divElement.style.setProperty('--c', this.color);
    divElement.style.setProperty('--s', (this.speed / 1000) * 2 + 's');

    body.append(divElement);

    function move() {
      top += 10;
      divElement.style.top = top + 'px';
      if (top >= window.innerHeight + 40) {
        clearInterval(timerId);
        divElement.remove();
      }
    }
    timerId = setInterval(move, this.speed);
  }
}

function addHeart() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomLeft = Math.floor(Math.random() * window.innerWidth);
  const randomSpeed = Math.floor(Math.random() * 500);

  const newHeart = new Heart(randomColor, randomLeft, randomSpeed);
  newHeart.draw();
}

setInterval(addHeart, 300);
