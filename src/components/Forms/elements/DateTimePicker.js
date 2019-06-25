import React, {Fragment} from "react";
import {DatePicker, TimePicker} from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const DateTimePicker = (props) => {
    const {dateValue, timeValue, setFieldValue, disableTime} = props;
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
                disableToolbar={true}
            />

            <FormControlLabel
                value="enableTime"
                control={
                    <Checkbox
                        color="primary"
                        onChange={(event, value) => {
                            setFieldValue("useTime", value);
                        }}
                    />
                }
                label="Time"
                labelPlacement="top"
            />

            <TimePicker
                name="time"
                label="Deadline time"
                format="HH:mm"
                inputVariant="outlined"
                ampm={false}
                disabled={disableTime}
                onChange={value => {
                    setFieldValue("time", value);
                }}
                value={timeValue}
            />
        </Fragment>
    );
};

export default DateTimePicker;