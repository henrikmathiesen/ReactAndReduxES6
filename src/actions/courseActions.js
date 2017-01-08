import courseApi from '../api/mockCourseApi';

export const CREATE_COURSE = 'CREATE_COURSE';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

export function createCourse(course) {
    return { type: CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
    return { type: LOAD_COURSES_SUCCESS, courses };
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
