import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from '../actions/courseActions';

// Reducers should be pure functions, no side effects, do not call Math.random or new Date() in here

export default function courseReducer(state = [], action) { 
    switch(action.type) {
        case CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)
            ];
        case LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}
