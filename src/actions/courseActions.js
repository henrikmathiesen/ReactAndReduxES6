import courseApi from '../api/mockCourseApi';
import * as actionTypes from './actionTypes';

export function createCourse(course) {
    return { type: actionTypes.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

// thunk (dispatch this action first, then this async action will dispatch loadCoursesSuccess above, our reducer will pick that up
export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw (error);
            });
    }
}
