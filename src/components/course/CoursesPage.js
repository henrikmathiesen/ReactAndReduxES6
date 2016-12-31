import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';

class CoursePage extends Component {

    // Call super(props) only if you want to access this.props inside the constructor. React automatically set it for you if you want to access it anywhere else.
    // http://cheng.logdown.com/posts/2016/03/26/683329 , http://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {
                title: null
            }
        };

        console.log(props);
        console.log(context);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Courses</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Add Course</h2>
                        </div>
                    </div>
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
                                bsStyle="success"
                                onClick={this.onClickSave}>
                                Add
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoursePage;
