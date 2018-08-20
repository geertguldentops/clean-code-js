const Rectangle = require('./Rectangle');

describe('Given a Rectangle', () => {

    const rectangle = new Rectangle(10.0, 5.2);

    describe('When calculating its circumference', () => {
        const circumference = rectangle.calculateCircumference();

        test('Then it return the sum of the width and the height times 2', () => {
            // expect(circumference).toBe(30.4); This won't work because of rounding error
            expect(circumference).toBeCloseTo(30.4); // This works.
        });
    });

    describe('When calculating its area', () => {
        const area = rectangle.calculateArea();

        test('Then it return the width times the height', () => {
            expect(area).toBeCloseTo(52);
        });
    });
});
