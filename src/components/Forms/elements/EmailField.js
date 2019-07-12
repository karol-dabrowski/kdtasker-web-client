import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { ErrorMessage } from "formik";

const EmailField = props => {
    const { classes, handleChange, handleBlur, value, touched, error, t } = props;
    return (
        <div className={classes.emailFieldWrapper}>
            <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                variant="outlined"
                id="email"
                margin="normal"
                label={t("form.email_label")}
                name="email"
                fullWidth
                autoFocus
                className={touched && error ? classes.errorField : ""}
            />
            <ErrorMessage name="email" render={msg => <div className={classes.errorMessage}>{t(msg)}</div>} />
        </div>
    );
};

const style = theme => ({
    emailFieldWrapper: {
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

export default withStyles(style)(EmailField);
