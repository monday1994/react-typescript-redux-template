import { combineReducers } from 'redux';
import requestsManagerReducer from './requestsManagerReducer';

export default (state: any, action: any) => {
    return combineReducers({
        requestsManager: requestsManagerReducer,
    })(state, action);
};