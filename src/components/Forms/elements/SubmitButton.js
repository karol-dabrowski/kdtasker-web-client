import React from "react";
import { Button, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const SubmitButton = props => {
    const { classes, t } = props;

    return (
        <Button
            className={classes.submitButton}
            type="submit"
            variant="outlined"
            size="large"
            color="primary"
            fullWidth
        >
            {t("form.submit")}
        </Button>
    );
};

SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
};

const style = theme => ({
    submitButton: {
        marginTop: theme.spacing(1)
    }
});

export default withStyles(style)(SubmitButton);
