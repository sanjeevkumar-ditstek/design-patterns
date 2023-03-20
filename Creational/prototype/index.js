const user = {
    name: "Sanjeev",
    lastName: "Kumar"
}

let newUser = Object.create(user)
console.log("newUser ", newUser);
newUser.prototype.fullName = () => {
    return this.name + " " + "_"
}

console.log(newUser)