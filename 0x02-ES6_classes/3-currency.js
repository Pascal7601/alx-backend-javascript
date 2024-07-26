export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('currency name must be string');
    }
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('currency code must be string');
    }
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
