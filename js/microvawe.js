class  Microwave extends Device  {
    constructor(power){
    super(power);
    this._timerId;
  }
  _onReady(){
    var text2 = 'еда нагрета'
    var textdiv2 = document.createElement('div');
    var p2 = document.createElement('p')
    p2.innerText = text2;
    document.body.appendChild(textdiv2)
    textdiv2.appendChild(p2);
  }
  set timeToCook(time){
     this._time=time
  }
  get timeToCook(){
      return this._time;
  }
  run(){
    if (!this._enabled) {
             throw new Error("Микроволновка выключена");
         }
         this._timerId = setTimeout(this._onReady, this.timeToCook);
  }
  disable(){
    super.disable()
    clearTimeout(this._timerId);
    var text3 = 'Микроволновка остановлена'
    var textdiv3 = document.createElement('div');
    var p3 = document.createElement('p')
    p2.innerText = text3;
    document.body.appendChild(textdiv3)
    textdiv3.appendChild(p3);
  }
  }
//   let microwave = new Microwave(300);
//      microwave.enable();
//      microwave.run();
     //microwave.disable();
   