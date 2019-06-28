import React from "react";
import {DatePicker, TimePicker} from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {withStyles} from "@material-ui/core";

const DateTimePicker = (props) => {
    const {classes, dateValue, timeValue, setFieldValue, disableTime} = props;
    return (
        <div className={classes.dateTimeWrapper}>
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
                        className={classes.timeCheckbox}
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
        </div>
    );
};

const style = theme => ({
    dateTimeWrapper: {
        marginBottom: theme.spacing(2)
    },
    timeCheckbox: {
        padding: theme.spacing(0.5)
    }
});

export default withStyles(style)(DateTimePicker);