import React from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const DateTimePicker = props => {
    const { classes, dateValue, timeValue, setFieldValue, disableTime, t } = props;

    return (
        <div className={classes.dateTimeWrapper}>
            <DatePicker
                name="date"
                label={t("form.deadline_date_label")}
                format="dd.MM.yyyy"
                inputVariant="outlined"
                className={classes.datePicker}
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
                        checked={!disableTime}
                        onChange={(event, value) => {
                            setFieldValue("useTime", value);
                        }}
                        className={classes.timeCheckbox}
                    />
                }
                label={t("form.deadline_time_checkbox_label")}
                className={classes.timeCheckboxLabel}
                labelPlacement="top"
            />

            <TimePicker
                name="time"
                label={t("form.deadline_time_label")}
                format="HH:mm"
                inputVariant="outlined"
                className={classes.timePicker}
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

DateTimePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    dateValue: PropTypes.object.isRequired,
    timeValue: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    disableTime: PropTypes.bool,
    t: PropTypes.func.isRequired
};

const style = theme => ({
    dateTimeWrapper: {
        marginBottom: theme.spacing(2),
        textAlign: "center"
    },
    datePicker: {
        float: "left",
        [theme.breakpoints.down("sm")]: {
            width: theme.spacing(26)
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginBottom: theme.spacing(3)
        }
    },
    timePicker: {
        float: "right",
        [theme.breakpoints.down("sm")]: {
            width: theme.spacing(26)
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(100% - 64px)"
        }
    },
    timeCheckboxLabel: {
        [theme.breakpoints.down("xs")]: {
            float: "left",
            marginLeft: 0
        }
    },
    timeCheckbox: {
        padding: theme.spacing(0.5)
    }
});

export default withStyles(style)(DateTimePicker);
