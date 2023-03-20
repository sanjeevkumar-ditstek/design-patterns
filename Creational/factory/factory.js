const Laptop = require("./laptop");
const Tablet = require("./tablet");
const Mobile = require("./mobile");

const gadget = { Laptop, Tablet, Mobile };
module.exports = {
    createGadget(type, attributes) {
        const GadgetType = gadget[type];
        return new GadgetType(attributes);
    }
};