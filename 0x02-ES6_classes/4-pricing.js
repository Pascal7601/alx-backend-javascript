import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    return this._amount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must beinstance of Currency');
    }
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

const p = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(p);
console.log(p.displayFullPrice());
