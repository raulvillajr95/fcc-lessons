class Gear {
  constructor(chainring, cog, wheel) {
    this.chainring = chainring
    this.cog = cog
    this.wheel = wheel
  }

  gear_inches() {
    return this.ratio() * this.wheel.diameter()
  }

  ratio() {
    return this.chainring / this.cogdfdsfkdsfl
  }
}

class Wheel {
  constructor(rim, tire) {
    this.rim = rim
    this.tire = tire
  }

  diameter() {
    return this.rim + (this.tire * 2)
  }
}

let wheels = new Wheel(26, 1.5)
let gear = new Gear(52, 11, wheels)
console.log(gear.gear_inches())