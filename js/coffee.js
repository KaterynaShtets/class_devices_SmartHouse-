'use strict'
class CoffeeMachine extends Device {
    constructor(power, capacity) {
        super(power)
        this._capacity = capacity;
        this._waterAmount = 0;
        this._timerId;
       

    }
    static get WATER_HEAT_CAPACITY() {
        return 4200
      }
    _waterAmountValid(amount) {
        if (typeof amount === 'number' && amount > 0 && amount < this._capacity) {
            this._waterAmount = amount
        }
    }

    set WaterAmount(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > this._capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }
        this._waterAmountValid(amount)
    }
    timeToBoil() {
        return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power
    };
    disable() {
        super.disable();
        clearTimeout(this.timerId)
        let text5 ='Кофеварка остановлена'
       let textdiv5 = document.createElement('div');
        let p5 = document.createElement('p')
        p5.innerText = text5;
        document.body.appendChild(textdiv4)
        textdiv5.appendChild(p5);
        
    }
    _onReady() {
      let text4 ='Готов кофе: ' + this._waterAmount + 'мл'
       let textdiv4 = document.createElement('div');
        let p4 = document.createElement('p')
        p4.innerText = text4;
        document.body.appendChild(textdiv4)
        textdiv4.appendChild(p4);
        
    }

    run() {
        if (!this._enabled) {
            throw new Error("Кофеварка выключена")
        }
        self = this;
        this._timerId = setTimeout(function () {
            CoffeeMachine.prototype._onReady.call(self)
        }, this.timeToBoil())
    }
    addWater(amount) {
        this.WaterAmount = this._waterAmount + amount;

    }

}
//let coffeeMachine = new CoffeeMachine(100000, 400);
//    coffeeMachine.enable();
//    coffeeMachine.power=10000
//    coffeeMachine.WaterAmount=100;
//    coffeeMachine.addWater(200);
//    coffeeMachine.addWater(100);
//    coffeeMachine.run();

//coffeeMachine.disable();-остановит
//coffeeMachine.addWater(300); // Нельзя залить больше..