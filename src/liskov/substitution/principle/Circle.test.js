const Circle = require('./Circle');

describe('Given a Circle', () => {

    const circle = new Circle(3.2);

    describe('When calculating its circumference', () => {
        const circumference = circle.calculateCircumference();

        test('Then it return the r times 2 times PI', () => {
            // expect(circumference).toBe(20.11); This might work, or it might not because of rounding errors!
            expect(circumference).toBeCloseTo(20.11); // This always works!
        });
    });

    describe('When calculating its area', () => {
        const area = circle.calculateArea();

        test('Then it return the r squared times PI', () => {
            expect(area).toBeCloseTo(32.17);
        });
    });
});