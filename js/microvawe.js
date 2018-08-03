'use strict'
class Microwave extends Device {
    constructor(power) {
        super(power);
        this._timerId;
    }
    _onReady() {
        alert('Еда нагрета');
    }
    set timeToCook(time) {
        this._time = time
    }
    get timeToCook() {
        return this._time;
    }
    run() {
        if (!this._enabled) {
            throw new Error("Микроволновка выключена");
        }
        this._timerId = setTimeout(this._onReady, this.timeToCook);
    }
    disable() {
        super.disable()
        clearTimeout(this._timerId);
        alert('Микроволновка остановлена')
    }
}
//   let microwave = new Microwave(300);
//      microwave.enable();
//      microwave.run();
//microwave.disable();