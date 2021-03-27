import {incrementActionType, decrementActionType} from '../actions/actionTypes'

const counterReducer = (state = 0, action) => {
    if (action.type === incrementActionType) {
        return state + action.payload.value
    } else if(action.type === decrementActionType) {
        return state - action.payload.value
    } else {
        return state
    }
};

export default counterReducer;