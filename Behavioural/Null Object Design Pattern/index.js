class Cat {
    sound() {
        return 'meoow';
    }
}
class Dog {
    sound() {
        return 'bhoww';
    }
}

class NullAnimal {
    sound() {
        return "not an animal";
    }
}

const getAnimal = (type) => {
    switch (type) {
        case "cat":
            return new Cat()
            break;
        case "dog":
            return new Dog()
            break;
        default:
            return new NullAnimal()
            break;
    }
}

const results = ['cat', null, 'dog'];

const response = results.map((animal) => getAnimal(animal).sound());
console.log("response", response)