import React from 'react';
import {withFormik} from 'formik';
import {addDays} from 'date-fns';

import TaskTitleField from "./elements/TaskTitleField";
import DateTimePicker from "./elements/DateTimePicker";
import SubmitButton from "./elements/SubmitButton";

const initialValues = {
    title: '',
    useTime: false,
    dateTime: addDays(Date.now(), 1)
};

const Form = props => {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        setFieldValue
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
            <DateTimePicker
                dateValue={values.date}
                timeValue={values.time}
                setFieldValue={setFieldValue}
                disableTime={!values.useTime}
            />
            <SubmitButton />
        </form>
    );
};

const NewTaskForm = withFormik({
    mapPropsToValues: () => ({
        title: initialValues.title,
        date: initialValues.dateTime,
        time: initialValues.dateTime,
        useTime: initialValues.useTime
    }),
    handleSubmit: (values, {props}) => {
        const month = (values.date.getMonth() + 1).toString();
        const monthString = month.length <= 1 ? '0' + month : month;
        const dateString = values.date.getFullYear() + '-' + monthString + '-' + values.date.getDate();
        const timeString = values.useTime ? values.time.getHours() + ':' + values.time.getMinutes() : null;

        props.handleSubmit(values.title, dateString, timeString, values.useTime);
    }
})(Form);

export default NewTaskForm;