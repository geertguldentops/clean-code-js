module.exports = class OrderLine {

    constructor(productName, price, amount) {
        this.productName = productName;
        this.price = price;
        this.amount = amount;
    }
};