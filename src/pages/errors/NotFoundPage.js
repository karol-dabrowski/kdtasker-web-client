import React from "react";

const NotFoundPage = props => {
    const { t } = props;
    return <div className="main-container">{t("page.not_found.title")}</div>;
};

export default NotFoundPage;
