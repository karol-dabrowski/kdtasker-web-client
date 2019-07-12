import React from "react";
import { Button, withStyles } from "@material-ui/core";

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

const style = theme => ({
    submitButton: {
        marginTop: theme.spacing(1)
    }
});

export default withStyles(style)(SubmitButton);
