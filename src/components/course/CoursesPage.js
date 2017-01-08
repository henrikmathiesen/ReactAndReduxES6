import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { Button, FormControl } from 'react-bootstrap';        // X: when form was inline ... Keeping for now, to better understand flow
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends Component {

    // Call super(props) only if you want to access this.props inside the constructor. React automatically set it for you if you want to access it anywhere else.
    // http://cheng.logdown.com/posts/2016/03/26/683329 , http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
    // X: when form was inline ... Keeping for now, to better understand flow
    // constructor(props, context) {
    //     super(props, context);

        
    //     this.state = {
    //         course: {
    //             title: ''
    //         }
    //     };

        
    //     // Place these in the constructor and not in the render method, for performance reasons
    //     this.changeCourse = this.changeCourse.bind(this);
    //     this.onTitleChange = this.onTitleChange.bind(this);
    //     this.onClickSave = this.onClickSave.bind(this);
    // }

    // X: when form was inline ... Keeping for now, to better understand flow
    // changeCourse(title) {
    //     const course = this.state.course;
    //     course.title = title;
    //     this.setState({ course: course });
    // }
    // onTitleChange(event) {
    //     const title = event.target.value;
    //     this.changeCourse(title);
    // }
    // onClickSave() {
    //     if (!this.state.course.title) { return; }
    //     console.log(`Saving course: ${this.state.course.title}`);
    //     //this.props.dispatch(courseActions.createCourse(this.state.course)); // A
    //     //this.props.createCourse(this.state.course); // B1
    //     this.props.actions.createCourse(this.state.course); // B2
    //     this.changeCourse('');
    // }

    render() {

        //const buttonBsStyle = this.state.course.title ? 'success' : 'warning'; // X: when form was inline ... Keeping for now, to better understand flow
        const { courses } = this.props;

        // COULD: Replace div with bootstrap classes with the actual component, https://react-bootstrap.github.io/components.html#grid
        // COULD: Refactor markup (to perhaps a CoursesDisplay component)
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Courses</h1>
                            <CourseList courses={courses} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Add Course</h2>
                        </div>
                    </div>
                </div>
            </div>
        );

        /*
            // X: when form was inline ... Keeping for now, to better understand flow
            <div className="row">
                <div className="col-xs-9 col-sm-8">
                    <FormControl
                        type="text"
                        value={this.state.course.title}
                        placeholder="Course name"
                        onChange={this.onTitleChange} />
                </div>
                <div className="col-xs-3 col-sm-4">
                    <Button
                        block
                        bsStyle={buttonBsStyle}
                        onClick={this.onClickSave}>
                        Add
                    </Button>
                </div>
            </div>
        */
    }
}

CoursePage.propTypes = {
    //dispatch: PropTypes.func.isRequired, -- no longer injected since we use aproach B
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// - In this component, I would like to access courses from the Redux Store via this.props.courses (state is the state in the store). ownProps are this components props in case we need to access those here (for example routing info)
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courseReducer
    };
}

// - In this component, what Redux Actions do I want to use in this component, this is optional but if omitted we have to manually dispatch with this.props.dispatch(courseActions.createCourse(this.state.course)); A)
// We use it, so instead of dispatching manually above (A), instead we do B (and props does not have a dispatch property)
function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course)) B1
        actions: bindActionCreators(courseActions, dispatch) // B2 convinient method that looks through all actions (import them all with *) and wrap them in a call to dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
