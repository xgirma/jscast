import {
  SELECT_POD, NEXT_POD, PREVIOUS_POD,
  FETCH_PODS_SUCCESS, FETCH_PODS_FAILURE,
} from './constants';
import api from '../utils/api';

export const selectPod = id => ({
  type: SELECT_POD,
  id,
});

export const nextPod = () => ({
  type: NEXT_POD,
});

export const previousPod = () => ({
  type: PREVIOUS_POD,
});

export const getPods = path => (dispatch) => {
  api.getPods(path).then((playlist) => {
    dispatch({
      type: FETCH_PODS_SUCCESS,
      playlist: playlist.data,
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_PODS_FAILURE,
      error,
    });
  });
};
