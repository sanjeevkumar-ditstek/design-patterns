const Mobile = function ({ name, ram, rom }) {
    this.name = name || "";
    this.ram = ram || 0;
    this.rom = rom || 0;
}
module.exports = Mobile