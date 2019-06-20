import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import NewTaskForm from './Forms/NewTaskForm';

class NewTaskModal extends Component {
    handleSubmit = (title) => {
        console.log(title);
    };

    render() {
        const {isOpened, handleClose} = this.props;

        return (
            <Dialog open={isOpened}>
                <DialogTitle>New task</DialogTitle>
                <DialogContent>
                    <NewTaskForm handleSubmit={this.handleSubmit}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
};

const styles = theme => ({

});

export default withStyles(styles)(NewTaskModal);