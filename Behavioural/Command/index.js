class Car {
    constructor(instruction) {
        this.instruction = instruction;
    }

    execute() {
        this.instruction.execute();
    }
}

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        console.log("Engine is On")
        this.state = true;
    }

    off() {
        console.log("Engine is OFF")
        this.state = false;
    }

    getState() {
        return this.state
    }
}

class OnInstruction {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class OffInstruction {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

const engine = new Engine();
const offInstruction = new OffInstruction(engine)
console.log("getState ", engine.getState())
const onInstruction = new OnInstruction(engine)
console.log("getState ", engine.getState())
new Car(onInstruction).execute()
console.log("getState after Execute", engine.getState())
new Car(offInstruction).execute()
console.log("getState after Execute", engine.getState())


