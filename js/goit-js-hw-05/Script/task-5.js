'use strict'

class Car {
    constructor(values) {
        this.speed = 0;
        this.price = values.price;
        this.maxSpeed = values.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    
    getSpecs() {
        console.log(`maxSpeed: ${this.maxSpeed} speed: ${this.speed} isOn: ${this.isOn} distance: ${this.distance} price: ${this.price}`)
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if(value <= this.maxSpeed) {
            this.speed = value
        } else {
            console.warn(`${this.maxSpeed} это максимально допустимая скорость`)
        }
    }

    decelerate(value) {
        if (value < this.speed) {
            this.speed -= value
        } else {
            console.warn(`ваше число больше скорость автомобиля`)
        }
    }
  
    drive(hours) {
        if (this.isOn === true) {
            this.distance = hours * this.speed;
        } else {
            console.warn(`ваша машина не заведена`)
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  mustang.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  mustang.getSpecs(mustang);
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000


