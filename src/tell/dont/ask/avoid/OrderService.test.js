const Order = require('./Order');
const OrderLine = require('./OrderLine');
const OrderService = require('./OrderService');

describe('Given an OrderService', () => {

    const orderService = new OrderService();

    describe('When finalising an order with a discount', () => {
        const order = new Order();
        // Ask an order for its order lines!
        order.orderLines.push(new OrderLine("Clean Code", 39.99, 1));
        order.orderLines.push(new OrderLine("Javascript: The Good Parts", 25, 2));

        const finalPrice = orderService.finaliseOrder(order, 0.1);

        test('Then it subtracts the discount from the product with the lowest price', () => {
            // expect(finalPrice).toBe(62.49); This might work, or it might not because of rounding errors!
            expect(finalPrice).toBeCloseTo(62.49); // This always works!
        });
    });
});
