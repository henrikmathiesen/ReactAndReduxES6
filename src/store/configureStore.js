import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import Environment from '../utils/Environment';

export default function configureStore(initialState) {
    const middleware = Environment.getIsDebug() ? [thunk, require('redux-immutable-state-invariant')()] : [thunk];
    const devTools = Environment.getIsDebug() && window.devToolsExtension ? window.devToolsExtension() : f => f;

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            devTools
        )
    );
}
