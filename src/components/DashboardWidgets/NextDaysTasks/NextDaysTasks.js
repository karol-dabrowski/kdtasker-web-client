import React, {Component} from 'react';
import {connect} from "react-redux";
import WidgetWrapper from "../WidgetWrapper";
import Preloader from "../../Preloader";

class NextDaysTasks extends Component {
    render() {
        const {loading} = this.props;

        return (
            <WidgetWrapper title="Next days" loading={loading} refreshButton={true}>
                { loading ? (
                        <Preloader />
                    ) :
                    ' '
                }
            </WidgetWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.nextDaysTasks.loading,
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(NextDaysTasks);