module.exports = class Order {

    constructor() {
        this.orderLines = [];
    }

    addOrderLine(orderLine) {
        this.orderLines.push(orderLine);
    }

    applyDiscount(discount) {
        // Ask an order line for its price (it is perfectly normal to ask your direct neighbours!)
        const orderLineWithLowestPrice = this.orderLines
            .sort((a, b) => a.price - b.price)[0];

        // Tell the order line to apply the discount to itself.
        orderLineWithLowestPrice.applyDiscount(discount);
    }

    calculateTotalPrice() {
        // Ask an order line for its price (it is perfectly normal to ask your direct neighbours!)
        return this.orderLines
            .map(orderLine => orderLine.price)
            // Sum the prices
            .reduce((a, b) => a + b, 0);
    }
};