/**
 *
 *
 *
 *
 *
 *
 */

/**
 * if looping, use recursion
 */

function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};
// const size = new Size(1080, 764);
// console.log(size.width);
// console.log(size.height);
// size.resize(1920, 1080);
// console.log(size.width);
// console.log(size.heigh

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (movedX, movedY) {
  this.x = movedX;
  this.y = movedY;
};
// const point = new Position();
// console.log(point.x);
// console.log(point.y);
// point.move(100, 200);
// console.log(point.x);
// console.log(point.y);

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    if (size.width < 1) {
      this.size.width = 1;
    } else if (size.width + this.position.x > this.screenSize.width) {
      this.size.width = this.screenSize.width - this.position.x;
    } else {
      this.size.width = size.width;
    }
    if (size.height < 1) {
      this.size.height = 1;
    } else if (size.height + this.position.y > this.screenSize.height) {
      this.size.height = this.screenSize.height - this.position.y;
    } else {
      this.size.height = size.height;
    }
  }

  move(position) {
    if (position.x < 0) {
      this.position.x = 0;
    } else if (position.x + this.size.width > this.screenSize.width) {
      this.position.x = this.screenSize.width - this.size.width;
    } else {
      this.position.x = position.x;
    }

    if (position.y < 0) {
      this.position.y = 0;
    } else if (position.y + this.size.height > this.screenSize.height) {
      this.position.y = this.screenSize.height - this.size.height;
    } else {
      this.position.y = position.y;
    }
  }
}
const programWindow = new ProgramWindow();

// const newSize = new Size(600, 400);
// programWindow.resize(newSize);
// console.log(programWindow.size.width);
// console.log(programWindow.size.height);

function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;

  programWindow.position.x = 100;
  programWindow.position.y = 150;

  return programWindow;
}

console.log(programWindow.size.width);
// changeWindow(programWindow);
const updateWindow = changeWindow(programWindow);
console.log(updateWindow.size.width, 'size width');
console.log(updateWindow.size.height, 'size height');
