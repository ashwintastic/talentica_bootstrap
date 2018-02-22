import {TEST_ACTION_TYPE} from '../ActionTypes'
export default function (state = {}, action){
    switch (action.type) {
        case TEST_ACTION_TYPE:
            return action.payload;
        default:
            return state;
    }
    return state
}