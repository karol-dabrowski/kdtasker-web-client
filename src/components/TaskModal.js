import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";

import NewTaskForm from './Forms/NewTaskForm';

class TaskModal extends Component {
    render() {
        const {isOpened, handleClose, handleSubmit, loading, taskId} = this.props;
        const title = taskId ? 'Edit task' : 'New task';

        return (
            <Dialog open={isOpened || loading} maxWidth={"sm"} fullWidth>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <NewTaskForm handleSubmit={handleSubmit}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.createTask.loading || state.editTask.loading
    };
};

export default connect(mapStateToProps)(TaskModal);