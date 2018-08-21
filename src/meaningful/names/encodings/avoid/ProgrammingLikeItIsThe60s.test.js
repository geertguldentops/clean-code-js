const ReportDefinitionModel = require('./ProgrammingLikeItIsThe60s');

// Avoid this! Encodings make the code unnecessary difficult to read!
describe('Given a ReportDefinitionModel', () => {
    const lcReportDefinitionModel = new ReportDefinitionModel();

    describe('When getting its fields', () => {
        let lIntId = lcReportDefinitionModel.m_int_id;

        test('Then ...', () => {
            expect(lIntId).toBeUndefined();
        });
    });
});
