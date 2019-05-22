import {Component} from 'react';
import {connect} from "react-redux";

class Auth extends Component {
    componentDidMount() {
        const {history, authorized} = this.props;
        if(authorized) {
            history.push('/dashboard');
        }
    }

    componentDidUpdate() {
        const {history, authorized} = this.props;
        if(authorized) {
            history.push('/dashboard');
        }
    }

    render() {
        return 'Auth page layout'
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(Auth);