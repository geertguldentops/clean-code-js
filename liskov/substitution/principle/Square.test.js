const Square = require('./Square');

describe('Given a Square', () => {

    const square = new Square(5.2);

    describe('When calculating its circumference', () => {
        const circumference = square.calculateCircumference();

        test('Then it return the side times 4', () => {
            // expect(circumference).toBe(20.8); This won't work because of rounding error
            expect(circumference).toBeCloseTo(20.8); // This works.
        });
    });

    describe('When calculating its area', () => {
        const area = square.calculateArea();

        test('Then it return the side squared', () => {
            expect(area).toBeCloseTo(27.04);
        });
    });

    describe('When I change its side and calculate its circumference', () => {
        square.side = 2;

        const newCircumference = square.calculateCircumference();

        // This test fails if you don't provide a JS setter for the "side" field in the "Square" class!
        test('Then it return the new side times 4', () => {
            expect(newCircumference).toBeCloseTo(8);
        });
    });

    describe('When I change its width and calculate its circumference', () => {
        square.width = 3;

        const newCircumference = square.calculateCircumference();

        // This test fails if you don't override the "width" setter in the "Square" class!
        test('Then it return the new side times 4', () => {
            expect(newCircumference).toBeCloseTo(12);
        });
    });

    describe('When I change its height and calculate its circumference', () => {
        square.height = 4;

        const newCircumference = square.calculateCircumference();

        // This test fails if you don't override the "height" setter in the "Square" class!
        test('Then it return the new side times 4', () => {
            expect(newCircumference).toBeCloseTo(16);
        });
    });
});
