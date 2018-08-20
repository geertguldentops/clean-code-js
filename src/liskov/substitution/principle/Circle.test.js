const Circle = require('./Circle');

describe('Given a Circle', () => {

    const circle = new Circle(3.2);

    describe('When calculating its circumference', () => {
        const circumference = circle.calculateCircumference();

        test('Then it return the r times 2 times PI', () => {
            // expect(circumference).toBe(20.11); This won't work because of rounding error
            expect(circumference).toBeCloseTo(20.11); // This works.
        });
    });

    describe('When calculating its area', () => {
        const area = circle.calculateArea();

        test('Then it return the r squared times PI', () => {
            expect(area).toBeCloseTo(32.17);
        });
    });
});