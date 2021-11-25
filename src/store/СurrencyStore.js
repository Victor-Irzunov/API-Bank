import { makeAutoObservable } from "mobx";

export default class CurrencyStore{
    constructor() {
        this._currency = []

        makeAutoObservable(this)
    }

    setCurrency(data) {
        this._currency = data
    }
    get currency() {
        return this._currency
    }
}