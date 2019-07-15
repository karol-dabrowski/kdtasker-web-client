import React from "react";
import PropTypes from "prop-types";

const NotFoundPage = props => {
    const { t } = props;
    return <div className="main-container">{t("page.not_found.title")}</div>;
};

NotFoundPage.propTypes = {
    t: PropTypes.func.isRequired
};

export default NotFoundPage;
