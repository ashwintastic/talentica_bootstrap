import {TEST_ACTION_TYPE} from '../ActionTypes'

export default function () {
    return {
        type: TEST_ACTION_TYPE,
        payload: "hello world"
    };
}