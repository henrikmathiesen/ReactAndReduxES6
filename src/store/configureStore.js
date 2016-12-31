import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/rootReducer';
import Environment from '../utils/Environment';

export default function configureStore(initialState) {
    if (Environment.getIsDebug()) {
        return createStore(
            rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant())
        );
    }
    else {
        return createStore(rootReducer, initialState);
    }
}
