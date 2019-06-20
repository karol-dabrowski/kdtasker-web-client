import React from 'react';
import {withFormik} from 'formik';

import TaskTitleField from "./elements/TaskTitleField";
import SubmitButton from "./elements/SubmitButton";

const initialValues = {
    title: ''
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
            <TaskTitleField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.title}
                touched={touched.title}
                error={errors.title}
            />

            <SubmitButton />
        </form>
    );
};

const NewTaskForm = withFormik({
    mapPropsToValues: () => ({
        title: initialValues.title
    }),
    handleSubmit: (values, {props}) => {
        props.handleSubmit(values.title);
    }
})(Form);

export default NewTaskForm;