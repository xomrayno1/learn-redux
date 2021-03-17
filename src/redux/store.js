import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

import rootReducer from './reducers/index'

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer)
// const store = createStore(rootReducer,
//     applyMiddleware(sagaMiddleware),
//     )
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
sagaMiddleware.run(rootSaga);

export default store;