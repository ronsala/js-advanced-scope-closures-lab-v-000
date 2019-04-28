function produceDrivingRange(blockRange) {
  return function(startString, endString) {
    var start = startString.slice(0, -2);
    debugger

    var end = endString.slice(0, -2);
    var startInt = parseInt(start, 10);
    var endInt = parseInt(end, 10);
    var distance = endInt - startInt;
    var diff = distance - blockRange;
    var posDiff = Math.abs(diff);

    if (diff > 0) {
      return `${posDiff} blocks out of range`;
    } else {
      return `within range by ${posDiff}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  }
}

let DriverId = 0;

function createDriver() {
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ DriverId;
    }
  }
}
