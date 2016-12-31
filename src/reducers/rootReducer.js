import {combineReducers} from 'redux';
import courseReducer from './courseReducer';

// This is neccessary if we are having more than 1 reducer
const rootReducer = combineReducers({
    courseReducer
});

export default rootReducer;
