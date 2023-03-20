class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    }

    getProduct() {
        return this.products
    }
}

class Discount {
    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    }
}

class NumberDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    exec(products) {
        let result = 0;
        if (products.length > 3) result = 0.05;

        return result + this.next.exec(products);
    }
}

class PriceDiscount {
    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    }

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b) => (a + b), 0);

        if (total >= 500) result = 0.1;

        return result + this.next.exec(products);
    }
}

class NoneDiscount {
    exec() {
        return 0;
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addProduct("A")
shoppingCart.addProduct("B")
shoppingCart.addProduct("C")
shoppingCart.addProduct("D")
console.log(shoppingCart.getProduct())

const discount = new Discount()
console.log(discount.calc(shoppingCart.getProduct()));
