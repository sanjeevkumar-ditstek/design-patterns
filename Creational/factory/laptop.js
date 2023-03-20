const Tablet = function ({ name, ram, ssd, network }) {
    this.name = name || "";
    this.ram = ram || 0;
    this.ssd = ssd || 0;
    this.network = network || 0;
}
module.exports = Tablet