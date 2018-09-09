const moment = require('moment');
const NullObjectPattern = require('./NullObjectPattern');

describe('All employees', () => {

    describe('Given an employee', () => {
        let employee = new NullObjectPattern.Employee(1, "Jane", "Doe", moment("2015-11-02"), moment("2017-12-31"));

        describe('When checking if she is null', () => {
            let isEmployeeNull = employee.isNull();

            test('Then it is always falsy', () => {
                expect(isEmployeeNull).toBeFalsy();
            });
        });

        describe('When calculating her wager', () => {
            let wager = employee.calculateWager();

            test('Then it equals 2000 for each full year she spend at our company', () => {
                expect(wager).toBe(2000);
            });
        });
    });

    describe('Given a NullEmployee', () => {
        let nullEmployee = new NullObjectPattern.NullEmployee();

        describe('When checking if it is null', () => {
            let isEmployeeNull = nullEmployee.isNull();

            test('Then it is always truthy', () => {
                expect(isEmployeeNull).toBeTruthy();
            });
        });

        describe('When calculating its wager', () => {
            let wager = nullEmployee.calculateWager();

            test('Then it is always 0', () => {
                expect(wager).toBe(0);
            });
        });
    });

    describe('Given a collection of employees', () => {
        let employees = NullObjectPattern.employees;

        describe('When summing their wagers no special code is necessary to handle nulls!', () => {
            let totalWager = employees
                .map(e => e.calculateWager())
                // Array.prototype does not have a sum method :(
                .reduce((a, b) => a + b, 0);

            test('Then the total is a pretty big number!', () => {
                expect(totalWager).toBe(3000);
            });
        });
    });
});