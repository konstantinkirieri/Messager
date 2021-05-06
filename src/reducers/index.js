import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';


export default (history) => combineReducers({
   router: connectRouter(history),
   chatReducer,
   profileReducer,
   messageReducer,
});