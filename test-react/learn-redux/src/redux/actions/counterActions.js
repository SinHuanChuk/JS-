import {incrementActionType, decrementActionType} from './actionTypes'

const incrementAction = (value) => {
    return {
        type: incrementActionType,
        payload: {value},
    }
}

const decrementAction = (value) => {
   return {
        type: decrementActionType,
        payload: {value},
   }
}

export default {incrementAction, decrementAction}