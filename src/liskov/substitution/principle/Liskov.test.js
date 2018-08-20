const Square = require('./Square');
const Rectangle = require('./Rectangle');

describe('Given a bunch of rectangles', () => {

    const rectangles = [
        new Rectangle(2, 3),
        new Rectangle(5, 10),
        new Square(4),
    ];

    describe('When I double their widths', () => {
        // Collect the "original" widths and heights for later.
        let originalWidths = rectangles.map(rectangle => rectangle.width);
        let originalHeights = rectangles.map(rectangle => rectangle.height);

        doubleWidthOf(rectangles);

        test('Then their widths should have doubles', () => {
            expect(rectangles.length).toBe(originalWidths.length);

            for (let i = 0; i < rectangles.length; i++) {
                expect(rectangles[i].width).toBe(originalWidths[i] * 2);
            }
        });

        test('And their heights should remain unchanged', () => {
            expect(rectangles.length).toBe(originalHeights.length);

            for (let i = 0; i < rectangles.length; i++) {
                expect(rectangles[i].height).toBe(originalHeights[i]);
            }
        });
    });
});

function doubleWidthOf(rectangles) {
    for (const rectangle of rectangles) {
        rectangle.width = rectangle.width * 2;
    }
}
