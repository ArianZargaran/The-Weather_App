import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER: {
      state = [ action.payload.data, ...state ];
      break;
    }
  }
  return state;
}