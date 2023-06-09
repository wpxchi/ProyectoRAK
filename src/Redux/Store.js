import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer} from './Reducer'


const composeEnhacer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  const store= createStore(
    reducer, 
    composeEnhacer(applyMiddleware(thunkMiddleware )))
    export default store


