import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Клавиатуры'},
            {id: 2, name: 'Наушники'}
        ]
        this._brands = [
            {id: 1, name: 'Logitech'},
            {id: 2, name: 'DarkProject'}
        ]
        this._devices = [
            {id: 1, name: 'Dark Project HS5', price: 9000, rating: 4.9, img: `https://c.dns-shop.ru/thumb/st1/fit/500/500/f5642b004598008e37407ecec45265b9/6c04fac1563ed9a2aad0ae97e4af65b5dec226c4108ced21068aab3c4a827c35.jpg.webp`},
            {id: 1, name: 'Logitech G435', price: 7300, rating: 4.7, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/2b4e93c24b2b4eb9b871627fdeda311e/8fc96f00e5a61e5496ec61a22e6d62474c8ea2fea99b3fb7b340a58982603461.jpg.webp`},
            {id: 1, name: 'Dark Project KD87A', price: 10100, rating: 4.8, img: `https://c.dns-shop.ru/thumb/st1/fit/500/500/e7687d173586ebaa30f157054e624dc0/1d4c2fe343cb18a91807a630fa668f617da3d850805b1f092cade0160dde4025.jpg.webp`},
            {id: 1, name: 'Logitech G335', price: 4200, rating: 4.1, img: `https://c.dns-shop.ru/thumb/st4/fit/500/500/2af966e580d1606a2b3b5d4ef301eabf/bb126ef2133a3f4bab49d5aaaaa26200ec60d34e071d269024da0932487f0784.jpg.webp`}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}