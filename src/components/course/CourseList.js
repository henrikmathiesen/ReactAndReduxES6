import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

// parameter could be written like this:
// (props) => { const courses = props.courses }
// but we use destructing instead

const CourseList = ({courses}) => {
    
    // Todo: Actual react-bootstrap table?
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => <CourseListRow key={course.id} course={course} />)}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
