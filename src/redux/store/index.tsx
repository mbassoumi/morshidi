import {createStore} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas/index';
import {rootReducer} from '../reducers';

// const initialiseSagaMiddleware = createSagaMiddleware();

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    // storeEnhancers(
    //     applyMiddleware(initialiseSagaMiddleware)
    // )
);

// initialiseSagaMiddleware.run(rootSaga);


export default store;