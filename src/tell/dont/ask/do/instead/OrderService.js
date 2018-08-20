module.exports = class OrderService {

    constructor() {
    }

    finaliseOrder(order, discount) {
        // Tell an order to apply a discount to itself.
        order.applyDiscount(discount);

        // Tell an order to calculate its total price.
        return order.calculateTotalPrice();
    }
};