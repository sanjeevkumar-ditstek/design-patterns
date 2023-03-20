class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhoneNumber(phoneNumber) {
        this.user.phoneNumber = phoneNumber
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

const user = new UserBuilder("RAM").setAge(10).setPhoneNumber("279171237").build()
console.log("user ", user)