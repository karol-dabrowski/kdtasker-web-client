import React from "react";
import { withFormik } from "formik";
import { addDays } from "date-fns";
import PropTypes from "prop-types";

import TaskTitleField from "./elements/TaskTitleField";
import DateTimePicker from "./elements/DateTimePicker";
import SubmitButton from "./elements/SubmitButton";
import { TaskFormSchema } from "../../validators/TaskFormValidator";

const initialValues = {
    taskId: null,
    title: "",
    useTime: false,
    dateTime: addDays(Date.now(), 1)
};

const Form = props => {
    const { values, handleChange, handleBlur, handleSubmit, touched, errors, setFieldValue, t } = props;

    return (
        <form onSubmit={handleSubmit}>
            <TaskTitleField
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.title}
                touched={touched.title}
                error={errors.title}
                t={t}
            />
            <DateTimePicker
                dateValue={values.date}
                timeValue={values.time}
                setFieldValue={setFieldValue}
                disableTime={!values.useTime}
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
    setFieldValue: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

const TaskForm = withFormik({
    mapPropsToValues: props => ({
        taskId: props.task.taskId ? props.task.taskId : initialValues.taskId,
        title: props.task.title ? props.task.title : initialValues.title,
        date: props.task.deadlineDate ? new Date(props.task.deadlineDate) : initialValues.dateTime,
        time: props.task.deadlineTime
            ? new Date(props.task.deadlineDate + " " + props.task.deadlineTime)
            : initialValues.dateTime,
        useTime: props.task.deadlineTime ? true : initialValues.useTime
    }),
    validationSchema: TaskFormSchema,
    handleSubmit: (values, { props }) => {
        const month = (values.date.getMonth() + 1).toString();
        const monthString = month.length <= 1 ? "0" + month : month;
        const day = values.date.getDate().toString();
        const dayString = day.length <= 1 ? "0" + day : day;
        const dateString = values.date.getFullYear() + "-" + monthString + "-" + dayString;
        const hour = values.time.getHours().toString();
        const hourString = hour.length <= 1 ? "0" + hour : hour;
        const minute = values.time.getMinutes().toString();
        const minuteString = minute.length <= 1 ? "0" + minute : minute;
        const timeString = values.useTime ? hourString + ":" + minuteString : null;

        props.handleSubmit(values.taskId, values.title, dateString, timeString);
    }
})(Form);

export default TaskForm;
