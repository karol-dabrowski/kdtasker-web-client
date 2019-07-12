import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { ErrorMessage } from "formik";

const LastNameField = props => {
    const { classes, handleChange, handleBlur, value, touched, error, t } = props;
    return (
        <div className={classes.lastNameFieldWrapper}>
            <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                variant="outlined"
                id="lastName"
                margin="normal"
                label={t("form.last_name_label")}
                name="lastName"
                fullWidth
                className={touched && error ? classes.errorField : ""}
            />
            <ErrorMessage name="lastName" render={msg => <div className={classes.errorMessage}>{t(msg)}</div>} />
        </div>
    );
};

const style = theme => ({
    lastNameFieldWrapper: {
        marginBottom: theme.spacing(2)
    },
    errorMessage: {
        color: theme.palette.error.main
    },
    errorField: {
        "& .MuiOutlinedInput-root": {
            "& fieldset, &:hover fieldset, &.Mui-focused fieldset": {
                borderColor: theme.palette.error.main
            }
        }
    }
});

export default withStyles(style)(LastNameField);
