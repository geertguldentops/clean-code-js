const Circle = require('./Circle');
const Rectangle = require('./Rectangle');

/*
JS does not have an explicit concept of an "interface", however, all 3 shapes have the same 2 methods:

Number calculateCircumference();

Number calculateArea();

Which makes them eligible for polymorphic calls in JS, so called "Duck typing":
*/
describe('Given a bunch of shapes', () => {

    const shapes = [
        new Circle(6.8),
        new Circle(4),
        new Rectangle(2, 8.7)
    ];

    describe('When calculating their circumference', () => {
        let totalCircumference = shapes
            .map(shape => shape.calculateCircumference())
            // Array.prototype does not have a sum method :(
            .reduce((a, b) => a + b, 0);

        test('Then it return the total circumference of all the shapes', () => {
            // expect(circumference).toBe(89.26); This might work, or it might not because of rounding errors!
            expect(totalCircumference).toBeCloseTo(89.26); // This always works!
        });
    });

    describe('When calculating their area', () => {
        let totalArea = shapes
            .map(shape => shape.calculateArea())
            // Array.prototype does not have a sum method :(
            .reduce((a, b) => a + b, 0);

        test('Then it return the r squared times PI', () => {
            expect(totalArea).toBeCloseTo(212.93);
        });
    });
});