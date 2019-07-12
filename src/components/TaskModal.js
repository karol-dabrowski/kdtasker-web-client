import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";

import TaskForm from "./Forms/TaskForm";
import Preloader from "./Preloader";

class TaskModal extends Component {
    render() {
        const { isOpened, handleClose, handleSubmit, loading, taskId, taskToEdit, t } = this.props;
        const title = taskId ? t("form.edit_task_modal_header") : t("form.new_task_modal_header");

        return (
            <Dialog open={isOpened || loading} maxWidth={"sm"} fullWidth>
                {loading ? (
                    <Preloader />
                ) : (
                    <Fragment>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogContent>
                            <TaskForm handleSubmit={handleSubmit} task={taskToEdit} t={t} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                {t("button.close")}
                            </Button>
                        </DialogActions>
                    </Fragment>
                )}
            </Dialog>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.createTask.loading || state.editTask.loading,
        taskToEdit: state.editTask.task
    };
};

export default connect(mapStateToProps)(TaskModal);
