module.exports = class OrderService {

    constructor() {
    }

    finaliseOrder(order, discount) {
        // Ask an order for all its order lines.
        const orderLineWithLowestPrice = order.orderLines
            // Ask an order line for its price to sort on it.
            .sort((a, b) => a.price - b.price)[0];

        this.applyDiscount(orderLineWithLowestPrice, discount);

        // Ask an order for all its order lines.
        return order.orderLines
            // Ask an order line for its price
            .map(orderLine => orderLine.price)
            // Sum the prices
            .reduce((a, b) => a + b, 0);
    }

    /**
     * Should be private but JS has no notion of visibility at the class level!
     */
    applyDiscount(orderLineWithLowestPrice, discount) {
        // Ask an order line for its price.
        const lowestPrice = orderLineWithLowestPrice.price;

        // Calculate and apply the discount.
        const appliedDiscount = lowestPrice * discount;
        const discountedPrice = lowestPrice - appliedDiscount;

        orderLineWithLowestPrice.price = discountedPrice;
    }
};