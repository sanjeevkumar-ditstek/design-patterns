class User {
    constructor(name) {
        this.name = name
    }
}
class Address {
    constructor(address) {
        this.address = address
    }
}

class UserBuilder {
    constructor(name, { age, phoneNumber, address } = {}) {
        this.name = name
        if (age)
            this.age = age
        if (phoneNumber)
            this.phoneNumber = phoneNumber
        if (address)
            this.address = new Address(address)
    }
}

const user = new UserBuilder("RAM", { address: "dlfkjaljaljasldaj;" })
console.log("user ", user)