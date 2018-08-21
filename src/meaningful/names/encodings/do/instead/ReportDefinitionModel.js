module.exports = class ReportDefinitionModel {

    constructor(id, name, category, locationType, periodSelection) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.locationType = locationType;
        this.periodSelection = periodSelection;
    }
};
