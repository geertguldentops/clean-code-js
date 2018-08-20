const API = require('./api');

describe('Given an api', () => {
    const api = new API();

    describe('When requesting the daily performance report', () => {
        const result = api.getDailyPerformanceReport();

        // Why, as a client, can I access all of these other APIs I am not interested in?
        api.getLastUserProductSelection();
        api.getUserProductSelections();

        test('Then ...', () => {
            expect(result).toBeUndefined();
        });
    });
});
