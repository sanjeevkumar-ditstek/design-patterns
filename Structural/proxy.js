const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
};

const options = {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
}

const optionsWithReflect = {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        return Reflect.set(obj, prop, value);
    }
}

const personProxy = new Proxy(person, optionsWithReflect);
personProxy["name"] = "Sanjeev"
personProxy.nationality = "San Francisco";
console.log("person ", person)

