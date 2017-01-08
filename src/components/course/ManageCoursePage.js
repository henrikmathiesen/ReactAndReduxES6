import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {

    render() {
        return (
            <h1>Manage Course</h1>
        );
    }

}

// ManageCoursePage.propTypes = {

// }

function mapStateToProps(state, ownProps) {

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
