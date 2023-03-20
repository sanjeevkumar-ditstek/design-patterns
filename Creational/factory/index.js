const factory = require("./factory");

const mobile = factory.createGadget("Mobile", {
    name: "Mobile",
    ram: 8,
    rom: 256,
});
const tablet = factory.createGadget("Tablet", {
    name: "Tablet",
    ram: 4,
    hdd: 128,
    network: '4G'
});
const laptop = factory.createGadget("Laptop", {
    name: "Laptop",
    ram: 8,
    ssd: 256,
});

console.log(mobile, tablet, laptop)