import {SELECT_POD, NEXT_POD, PREVIOUS_POD, LIKE_POD} from '../constants';

export default function (state = {}, action) {
  if (action.type === SELECT_POD) {
    const {playlist} = state;
    if (playlist.length <= 1) {
      return playlist;
    }
    const index = playlist.findIndex(pod => pod._id === action.id);
    return [...(playlist.slice(index)), ...(playlist.slice(0, index))];
  }
  
  if (action.type === NEXT_POD) {
    const {playlist} = state;
    if (playlist.length <= 1) {
      return playlist;
    }
    const index = 1;
    return [...(playlist.slice(index)), ...(playlist.slice(0, index))];
  }
  
  if (action.type === PREVIOUS_POD) {
    const {playlist} = state;
    if (playlist.length <= 1) {
      return playlist;
    }
    const index = playlist.length - 1;
    return [...(playlist.slice(index)), ...(playlist.slice(0, index))];
  }
  
  return state;
}