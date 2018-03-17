import {
  SELECT_POD, NEXT_POD, PREVIOUS_POD,
  FETCH_PODS_SUCCESS, FETCH_PODS_FAILURE,
  POST_LIKE_PODS_FAILURE, POST_LIKE_PODS_SUCCESS,
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

export const likePod = id => (dispatch) => {
  api.likePod(id).then((data) => {
    const modified = data.nModified === 1;
    dispatch({
      type: POST_LIKE_PODS_SUCCESS,
      liked: modified,
    });
  }).catch((error) => {
    dispatch({
      type: POST_LIKE_PODS_FAILURE,
      liked: false,
      error,
    });
  });
};

export const getPods = (path, recent, library) => (dispatch) => {
  api.getPods(path).then((playlist) => {
    dispatch({
      type: FETCH_PODS_SUCCESS,
      playlist: playlist.data,
      recent,
      library,
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_PODS_FAILURE,
      error,
    });
  });
};

export const getChannels = () => (dispatch) => {

};
