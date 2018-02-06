import { combineReducers } from 'redux';
import reducerWeather from './reducer-weather';

const rootReducer = combineReducers({
  weather: reducerWeather
});

export default rootReducer;