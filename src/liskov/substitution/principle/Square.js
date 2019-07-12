const Rectangle = require('./Rectangle');

/**
 * Square has an extra invariant compared to a Rectangle, width and height must always be equal!
 */
module.exports = class Square extends Rectangle {

    constructor(side) {
        super(side, side);
    }

    // JS quirk? getters are not inherited?
    get width() {
        return this._width;
    }

    set width(width) {
        this.side = width;
    }

    // JS quirk? getters are not inherited?
    get height() {
        return this._height;
    }

    set height(height) {
        this.side = height;
    }

    get side() {
        return super._width;
    }

    set side(side) {
        super._width = side;
        super._height = side;
    }
};
