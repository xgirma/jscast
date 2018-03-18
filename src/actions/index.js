import api from '../utils/api';

export const SELECT_POD = 'SELECT_POD';
export const NEXT_POD = 'NEXT_POD';
export const PREVIOUS_POD = 'PREVIOUS_POD';
export const FETCH_PODS_FAILURE = 'FETCH_PODS_FAILURE';
export const FETCH_PODS_SUCCESS = 'FETCH_PODS_SUCCESS';
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS';
export const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE';
export const FETCH_CHANNEL_POD_SUCCESS = 'FETCH_CHANNEL_POD_SUCCESS';
export const FETCH_CHANNEL_POD_FAILURE = 'FETCH_CHANNEL_POD_FAILURE';
export const POST_LIKE_PODS_FAILURE = 'POST_LIKE_PODS_FAILURE';
export const POST_LIKE_PODS_SUCCESS = 'POST_LIKE_PODS_SUCCESS';

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

export const getPods = (path, recent = true, library = false) => (dispatch) => {
  api.getPods(path).then((playlist) => {
    dispatch({
      type: FETCH_PODS_SUCCESS,
      playlist: playlist.data,
      recent,
      library,
      channel: null,
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_PODS_FAILURE,
      error,
    });
  });
};

export const getChannels = () => (dispatch) => {
  api.getChannelsInfo().then((collections) => {
    dispatch({
      type: FETCH_COLLECTION_SUCCESS,
      collections: collections.data,
      channel: null,
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_COLLECTION_FAILURE,
      error,
    });
  });
};

export const getPodsByChannel = (path, channel, recent = true, library = true) => (dispatch) => {
  api.getPodsFromChannel(path, channel).then((playlist) => {
    dispatch({
      type: FETCH_CHANNEL_POD_SUCCESS,
      playlist: playlist.data,
      recent,
      library,
      channel,
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_CHANNEL_POD_FAILURE,
      error,
    });
  });
};
