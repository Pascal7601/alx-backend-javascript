export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
    if (typeof location !== 'string') {
      throw new TypeError('location must be string');
    }
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}

const hc = new HolbertonClass(12, 'Mezzanine');
console.log(Number(hc));
console.log(String(hc));
