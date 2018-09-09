const moment = require('moment');

let Employee = class Employee {

    constructor(id, firstName, lastName, hiringDate, terminationDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.hiringDate = hiringDate;
        this.terminationDate = terminationDate;
    }

    calculateWager() {
        return this.calculateEmploymentDurationInYears() * 1000;
    }

    calculateEmploymentDurationInYears() {
        return this.terminationDate.diff(this.hiringDate, 'years');
    }

    isNull() {
        return false;
    }
};

let NullEmployee = class NullEmployee {

    constructor() {
        // Apply reasonable defaults
        this.id = -1;
        this.firstName = "";
        this.lastName = "";
        this.function = "";
        this.hiringDate = moment();
        this.terminationDate = moment();
    }

    calculateWager() {
        return 0;
    }

    isNull() {
        return true;
    }
};

module.exports.Employee = Employee;
module.exports.NullEmployee = NullEmployee;

// Advantage of a dynamically typed language: heterogeneous arrays!
module.exports.employees = [
    new Employee(1, "Jane", "Doe", moment("2015-11-02"), moment("2017-12-31")),
    new Employee(2, "John", "Doe", moment("2016-03-19"), moment("2017-12-31")),
    new NullEmployee()
];