var Jet = function (color, size) {
  this.color = color;
  this.size = size;

  this.tesfunc = function () {
    console.log('test');
  }

  this.fly = function () {
    console.log('wish');
  }
  this.takeOff2 = function () {
    console.log('lift off!');
  }
  this.takeOff = function () {
    console.log('lift off!');
  }

}

module.exports = Jet;