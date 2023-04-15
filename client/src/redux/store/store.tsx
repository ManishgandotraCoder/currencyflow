import rootReducer from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// ...

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
  applyMiddleware(sagaMiddleware)
)
export default store;