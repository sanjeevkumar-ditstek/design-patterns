function getFullName() {
    return this.firstName + ' ' + this.lastName;
};

function User(firstName, lastName) {
    function constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    constructor.prototype.getFullName = getFullName;

    let instance = new constructor(firstName, lastName);
    return instance;
};

const atv1 = User();
const atv2 = User('Sanjeev', 'Kumar');
console.log('atv1', atv2.getFullName())