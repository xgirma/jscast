import { LIKE_POD } from './path';

const BASE_URL = 'https://midiapi.herokuapp.com/api/v1';

const pods = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

const channels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/channels`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

const podsFromChannel = async (path, channel) => {
  try {
    const response = await fetch(`${BASE_URL}${path}/channels?title=${channel}`);
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
    return pods(path);
  },
  getChannelsInfo() {
    return channels();
  },
  getPodsFromChannel(path, channel){
    return podsFromChannel(path, channel);
  },
  likePod(id) {
    return submitLike(id);
  },
};

