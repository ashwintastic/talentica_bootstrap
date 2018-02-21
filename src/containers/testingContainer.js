import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Testing from '../component/testing';
import testAction from '../actions/testAction';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        testAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);