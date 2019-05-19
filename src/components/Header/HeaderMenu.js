import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const HeaderMenu = (props) => {
    const {isLogged} = props;

    return (
        <Fragment>
            {isLogged ? (
                <Typography color="primary" noWrap component={Link} to="/dashboard">
                    Dashboard
                </Typography>
            ) : (
                ''
            )}
        </Fragment>
    );
};

export default HeaderMenu;