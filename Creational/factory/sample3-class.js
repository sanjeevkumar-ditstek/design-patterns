class Car {
    constructor(options) {
        this.wheels = options.wheels || 4;
        this.doors = options.doors || 4;
        this.color = options.color || "silver";
    }
}

class Truck {
    constructor(options) {
        this.wheels = options.wheels || 6;
        this.doors = options.doors || 2;
        this.color = options.color || "red";
    }
}

const VEHICLE_TYPES = {
    CAR: "car",
    TRUCK: "truck"
}

class Factory {
    create = (options, vehicleType) => {

        if (!vehicleType) {
            return "unable to make vehicle. Please specify a vehicle type and tryagain!"
        }

        let vehicle;

        if (vehicleType === VEHICLE_TYPES.CAR) {
            vehicle = new Car(options);
        } else if (vehicleType === VEHICLE_TYPES.TRUCK) {
            vehicle = new Truck(options);
        }


        vehicle.vehicleType = vehicleType;

        vehicle.start = () => console.log(`Reving ${vehicleType} engine`);

        vehicle.drive = () => console.log(`Driving ${vehicleType}...`);

        vehicle.stop = () => console.log(`Stop ${vehicleType} engine`);

        return vehicle;
    }
};

const vehicleFactory = new Factory();

const car = vehicleFactory.create({
    wheels: 4,
    doors: 2,
    color: "black",
}, "car");

console.log(car)
car.start()
car.drive()
car.stop()

const truck = vehicleFactory.create({
    wheels: 4,
    doors: 2,
    color: "yellow",
}, "truck")

console.log(truck)
truck.start()
truck.drive()
truck.stop()
