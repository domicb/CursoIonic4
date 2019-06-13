class Car {

  constructor(make) {
    this.make = make;
    this.km = 0;
  }

  getInfo() {
    return `${this.make}: ${this.km}km`;
  }

  move(km) {
    this.km += km;
  }
}

module.exports = Car;
