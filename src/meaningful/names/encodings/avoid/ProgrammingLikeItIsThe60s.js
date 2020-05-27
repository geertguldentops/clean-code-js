module.exports = class ReportDefinitionModel {

    // Avoid this! Encodings make the code unnecessary difficult to read!
    constructor(int_id, str_name, str_category, str_locationType, rec_periodSelection) {
        this.m_int_id = int_id;
        this.m_str_name = str_name;
        this.m_str_category = str_category;
        this.m_str_locationType = str_locationType;
        this.m_rec_periodSelection = rec_periodSelection;
    }
};
