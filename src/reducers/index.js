import { combineReducers } from "redux";

const dataReducers = (state = {}, action) => {
  if(action.type === 'GET_DATA') {
    return action.payload.data;
  }
  return state;
}

export default combineReducers({
  data:dataReducers,
})