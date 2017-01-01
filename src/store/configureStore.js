import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import Environment from '../utils/Environment';

export default function configureStore(initialState) {
    const middleware = Environment.getIsDebug() ? [thunk, reduxImmutableStateInvariant()] : [thunk];
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
