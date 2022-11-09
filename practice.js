class Clock {
  constructor() {
    this.stop = () => {clearInterval(this.timer)};
    this.timer = setInterval(this.render, 1000)
  }

  render() {
    let template = 'h:m:s';

    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output)
  }

  start() {
    this.render();
    this.timer;
  }
}

let clock = new Clock();
clock.start()