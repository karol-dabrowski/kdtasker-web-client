import React from "react";
import {Button, withStyles} from "@material-ui/core";

const SubmitButton = (props) => {
    const {classes} = props;
    return (
        <Button
            className={classes.submitButton}
            type="submit"
            variant="outlined"
            size="large"
            color="primary"
            fullWidth
        >
            Submit
        </Button>
    );
};

const style = theme => ({
    submitButton: {
        'margin-top': theme.spacing(1)
    }
});

export default withStyles(style)(SubmitButton);