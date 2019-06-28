import React from "react";
import {TextField, withStyles} from "@material-ui/core";
import {ErrorMessage} from "formik";

const TitleField = (props) => {
    const {classes, handleChange, handleBlur, value, touched, error} = props;
    return (
        <div className={classes.titleFieldWrapper}>
            <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                variant="outlined"
                id="title"
                margin="normal"
                label="Title"
                name="title"
                fullWidth
                autoFocus
                className={touched && error ? classes.errorField : ''}
            />
            <ErrorMessage className={classes.errorMessage} component="div" name="title" />
        </div>
    );
};

const style = theme => ({
    titleFieldWrapper: {
        marginBottom: theme.spacing(2)
    },
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

export default withStyles(style)(TitleField);