import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import Environment from '../utils/Environment';

export default function configureStore(initialState) {
    const middleware = Environment.getIsDebug() ? [thunk, require('redux-immutable-state-invariant')()] : [thunk];
    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
