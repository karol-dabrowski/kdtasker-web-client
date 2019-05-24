import React from 'react';
import {withFormik} from 'formik';

import PasswordField from './elements/PasswordField';
import SubmitButton from './elements/SubmitButton';
import EmailField from "./elements/EmailField";

const initialValues = {
    email: '',
    password: ''
};

const Form = props => {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <EmailField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                touched={touched.email}
                error={errors.email}
            />

            <PasswordField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                touched={touched.password}
                error={errors.password}
            />

            <SubmitButton />
        </form>
    );
};

const LoginForm = withFormik({
    mapPropsToValues: () => ({
        email: initialValues.email,
        password: initialValues.password
    }),

    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, {props}) => {
        props.handleSubmit(values.email, values.password);
    }
})(Form);

export default LoginForm;