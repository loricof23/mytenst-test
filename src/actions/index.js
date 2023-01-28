import api from "../api/api";

export const getData = (name) => async dispatch => {
  const response = await api.get('/repos');
  dispatch ({type: 'GET_DATA', payload: response});
}