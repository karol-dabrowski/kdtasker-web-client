import React from "react";
import {TextField, withStyles} from "@material-ui/core";
import {ErrorMessage} from "formik";

const PasswordField = (props) => {
    const {classes, handleChange, handleBlur, value, touched, error, t} = props;
    return (
        <div className={classes.passwordFieldWrapper}>
            <TextField
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                variant="outlined"
                id="password"
                margin="normal"
                label={t('form.password_label')}
                name="password"
                fullWidth
                className={touched && error ? classes.errorField : ''}
            />
            <ErrorMessage name="password" render={msg => <div className={classes.errorMessage}>{t(msg)}</div>} />
        </div>
    );
};

const style = theme => ({
    passwordFieldWrapper: {
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

export default withStyles(style)(PasswordField);