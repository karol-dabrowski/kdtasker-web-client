import React, {Fragment} from "react";
import {TextField, withStyles} from "@material-ui/core";
import {ErrorMessage} from "formik";

const EmailField = (props) => {
    const {classes, handleChange, handleBlur, value, touched, error} = props;
    return (
        <Fragment>
            <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                variant="outlined"
                id="email"
                margin="normal"
                label="Email"
                name="email"
                fullWidth
                autoFocus
                className={touched && error ? classes.errorField : ''}
            />
            <ErrorMessage className={classes.errorMessage} component="div" name="email" />
        </Fragment>
    );
};

const style = theme => ({
    errorMessage: {
        color: theme.palette.error.main
    },
    errorField: {
        '& .MuiOutlinedInput-root': {
            '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                borderColor: theme.palette.error.main
            }
        }
    }
});

export default withStyles(style)(EmailField);