module.exports = class ReportDefinitionModel {

    // Avoid this! Encodings make the code unnecessary difficult to read!
    constructor(m_int_id, m_str_name, m_str_category, m_str_locationType, m_rec_periodSelection) {
        this.m_int_id = m_int_id;
        this.m_str_name = m_str_name;
        this.m_str_category = m_str_category;
        this.m_str_locationType = m_str_locationType;
        this.m_rec_periodSelection = m_rec_periodSelection;
    }
};
