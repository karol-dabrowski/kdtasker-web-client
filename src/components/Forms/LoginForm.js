import React from "react";
import { withFormik } from "formik";

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
