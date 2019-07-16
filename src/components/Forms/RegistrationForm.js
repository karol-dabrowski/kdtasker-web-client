import React from "react";
import { withFormik } from "formik";
import PropTypes from "prop-types";

import PasswordField from "./elements/PasswordField";
import SubmitButton from "./elements/SubmitButton";
import EmailField from "./elements/EmailField";
import FirstNameField from "./elements/FirstNameField";
import LastNameField from "./elements/LastNameField";
import { RegistrationFormSchema } from "../../validators/RegistrationFormValidator";

const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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

            <FirstNameField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.firstName}
                touched={touched.firstName}
                error={errors.firstName}
                t={t}
            />

            <LastNameField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.lastName}
                touched={touched.lastName}
                error={errors.lastName}
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

const RegistrationForm = withFormik({
    mapPropsToValues: props => ({
        email: props.formState.email ? props.formState.email : initialValues.email,
        firstName: props.formState.firstName ? props.formState.firstName : initialValues.firstName,
        lastName: props.formState.lastName ? props.formState.lastName : initialValues.lastName,
        password: initialValues.password
    }),
    validationSchema: RegistrationFormSchema,
    handleSubmit: (values, { props }) => {
        props.handleSubmit(values.email, values.password, values.firstName, values.lastName);
    }
})(Form);

export default RegistrationForm;
