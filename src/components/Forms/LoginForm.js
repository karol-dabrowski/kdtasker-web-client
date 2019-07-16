import React from "react";
import { withFormik } from "formik";
import PropTypes from "prop-types";

import PasswordField from "./elements/PasswordField";
import SubmitButton from "./elements/SubmitButton";
import EmailField from "./elements/EmailField";
import { LoginFormSchema } from "../../validators/LoginFormValidator";

const initialValues = {
    email: "",
    password: ""
};

const Form = props => {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors, t } = props;

    return (
        <form onSubmit={handleSubmit}>
            <EmailField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                touched={touched.email}
                error={errors.email}
                t={t}
            />

            <PasswordField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                touched={touched.password}
                error={errors.password}
                t={t}
            />

            <SubmitButton t={t} />
        </form>
    );
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    touched: PropTypes.object,
    errors: PropTypes.object,
    t: PropTypes.func.isRequired
};

const LoginForm = withFormik({
    mapPropsToValues: props => ({
        email: props.formState.username ? props.formState.username : initialValues.email,
        password: initialValues.password
    }),
    validationSchema: LoginFormSchema,
    handleSubmit: (values, { props }) => {
        props.handleSubmit(values.email, values.password);
    }
})(Form);

export default LoginForm;
