module.exports = class Rectangle {

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    calculateCircumference() {
        return 2 * (this._width + this._height);
    }

    calculateArea() {
        return this._width * this._height;
    }
};
