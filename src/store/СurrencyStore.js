import { makeAutoObservable } from "mobx";

export default class CurrencyStore{
    constructor() {
        this._currency = []
        this._addCurrency = ''

        makeAutoObservable(this)
    }

    setCurrency(data) {
        this._currency = data
    }
    setAddCurrency(data) {
        this._addCurrency = data
    }

    get currency() {
        return this._currency
    }
    get addCurrency() {
        return this._addCurrency
    }
}