import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const HeaderUserMenu = (props) => {
    const {isLogged} = props;

    return (
        <Fragment>
            {isLogged ? (
                ''
            ) : (
                <Button color="primary" variant="outlined" component={Link} to="/login">
                    Sign in
                </Button>
            )}
        </Fragment>
    );
};

export default HeaderUserMenu;