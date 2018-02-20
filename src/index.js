class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction;
    this.compareNumbers = function(a, b) {
      return a - b;
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var subArr = [];
    indices.sort(this.compareNumbers);

    for (var i = 0; i < indices.length; i++){
      subArr.push(this.arr[indices[i]]);
    }

    if (this.compareFunction == undefined){
      subArr.sort(this.compareNumbers);
    } else {
      subArr.sort(this.compareFunction);
    }

    for (var j = 0; j < indices.length; j++){
      this.arr[indices[j]] = subArr[j];
    }

  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
