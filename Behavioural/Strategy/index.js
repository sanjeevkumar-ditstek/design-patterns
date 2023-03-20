class ShoppingCart {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }
    checkout() {
        return this.discount(this.amount);
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getAmount() {
        return this.amount;
    }
}

function guest(amount) {
    return amount;
}

function regular(amount) {
    return amount * 0.9;
}

function premium(amount) {
    return amount * 0.8;
}

// Discount Statergy to choose from guest, regular and premium
const cart = new ShoppingCart(premium)
cart.setAmount(100)
console.log(cart.checkout())