import React from 'react';
import { withFormik, ErrorMessage } from 'formik';

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
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
                name="email"
            />
            <ErrorMessage component="span" name="email" />

            <input
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                name="password"
            />
            <ErrorMessage component="span" name="password" />

            <button type="submit">Submit</button>
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