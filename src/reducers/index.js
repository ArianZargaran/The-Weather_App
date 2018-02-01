import { combineReducers } from 'redux';
import reducerWheather from './reducer-weather';

const rootReducer = combineReducers({
  weather: reducerWheather
});

export default rootReducer;