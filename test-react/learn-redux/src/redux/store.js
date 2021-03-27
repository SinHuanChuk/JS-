import {createStore, combineReducers} from 'redux'
import counterReducer from './reducers/counterReducer'

const rootCounterReducer = combineReducers({
    counterValue: counterReducer,
}) 

const store = createStore(rootCounterReducer)

export default store