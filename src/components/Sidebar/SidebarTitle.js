import React from "react";

const SidebarTitle = props => {
    const { t } = props;

    return (
        <div>{t("header.brand")}</div>
    );
};

export default SidebarTitle;