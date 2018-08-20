module.exports = class OrderLine {

    constructor(productName, price, amount) {
        this.productName = productName;
        this.price = price;
        this.amount = amount;
    }

    applyDiscount(discount) {
        const appliedDiscount = this.price * discount;

        this.price = this.price - appliedDiscount;
    }
};