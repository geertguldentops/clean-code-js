module.exports = class Circle {

    constructor(r) {
        this._r = r;
    }

    get r() {
        return this._r;
    }

    set r(r) {
        this._r = r;
    }

    calculateCircumference() {
        return 2 * this._r * Math.PI;
    }

    calculateArea() {
        return this._r * this._r * Math.PI;
    }
};
