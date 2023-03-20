class SingleTon {
    constructor(data = []) {
        if (!SingleTon.instance) {
            this.data = data
            SingleTon.instance = this
        }
        return SingleTon.instance
    }
}

const singleTon1 = new SingleTon([1, 2, 3, 4, 5])
const singleTon2 = new SingleTon([1, 2, 3])

console.log(singleTon1, singleTon2)