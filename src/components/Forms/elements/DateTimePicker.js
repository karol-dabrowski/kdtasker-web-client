import React, {Fragment} from "react";
import {DatePicker, TimePicker} from "@material-ui/pickers";

const DateTimePicker = (props) => {
    const {dateValue, timeValue, setFieldValue} = props;
    return (
        <Fragment>
            <DatePicker
                name="date"
                label="Deadline date"
                format="dd.MM.yyyy"
                inputVariant="outlined"
                onChange={value => {
                    setFieldValue("date", value);
                }}
                value={dateValue}
                animateYearScrolling={false}
            />
            <TimePicker
                name="time"
                label="Deadline time"
                format="HH:mm"
                inputVariant="outlined"
                onChange={value => {
                    setFieldValue("time", value);
                }}
                value={timeValue}
            />
        </Fragment>
    );
};

export default DateTimePicker;