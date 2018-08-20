module.exports = class ReportDefinitionModel {

    constructor(m_int_id, m_str_name, m_str_category, m_str_locationType, m_rec_periodSelection) {
        this.m_int_id = m_int_id;
        this.m_str_name = m_str_name;
        this.m_str_category = m_str_category;
        this.m_str_locationType = m_str_locationType;
        this.m_rec_periodSelection = m_rec_periodSelection;
    }
};
