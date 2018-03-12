import {NEXT_POD, PREVIOUS_POD} from '../constants';

export default function (state = {}, action) {
  if (action.type === NEXT_POD) {
    const {playlist, autoPlay} = state;
    
    if (playlist.length <= 1) {
      return { autoPlay: true, ...playlist};
    }
    
    const index = 1;
    
    return {
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))]
    };
  }
  
  if (action.type === PREVIOUS_POD) {
    const {playlist, autoPlay} = state;
    if (playlist.length <= 1) {
      return { autoPlay: true, ...playlist};
    }
    const index = playlist.length - 1;

    return {
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))]
    };
  }
  
  return state;
}
