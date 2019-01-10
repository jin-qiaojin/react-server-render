import {
    combineReducers
} from 'redux';
import {
    colorChange
} from './color';

const appReducer = combineReducers({
    colorChange
})

export default appReducer;