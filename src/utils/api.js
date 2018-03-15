import { LIKE_POD } from './path';

const BASE_URL = 'https://midiapi.herokuapp.com/api/v1';

const getPodcasts = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

const submitLike = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${LIKE_POD}${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getPods(path) {
    return getPodcasts(path);
  },
  likePod(id) {
    return submitLike(id);
  },
};

