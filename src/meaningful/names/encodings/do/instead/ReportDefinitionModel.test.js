const ReportDefinitionModel = require('./ReportDefinitionModel');

describe('Given a ReportDefinitionModel', () => {
    const reportDefinitionModel = new ReportDefinitionModel();

    describe('When getting its fields', () => {
        let id = reportDefinitionModel.id;

        test('Then ...', () => {
            expect(id).toBeUndefined();
        });
    });
});
