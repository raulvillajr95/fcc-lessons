class Clock {
  template = 'h:m:s'
  timer = 0;

  constructor() {
    this.stop = function() {clearInterval(timer)};
    this.start = function() {
      this.render();
      this.timer = setInterval(this.render, 1000);
    };
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = 'h:m:s'
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

}

let clock = new Clock();
clock.start();