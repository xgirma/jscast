import {NEXT_POD, PREVIOUS_POD, SELECT_POD} from '../actions/constants';

export default function (state = {}, action) {
  if (action.type === NEXT_POD) {
    const {playlist} = state;
    
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
    const {playlist} = state;
    if (playlist.length <= 1) {
      return { autoPlay: true, ...playlist};
    }
    const index = playlist.length - 1;

    return {
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))]
    };
  }
  if(action.type === SELECT_POD){
    const {playlist} = state;
    const index = playlist.findIndex(pod => pod._id === action.id);
    
    return {
      autoPlay: true,
      playlist: [...(playlist.slice(index)), ...(playlist.slice(0, index))]
    };
  }
  
  return state;
}
