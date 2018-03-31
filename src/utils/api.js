import { LIKE_POD } from './path';

const BASE_URL = 'https://midiapi.herokuapp.com/api/v1';

export const pods = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export const channels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/channels`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export const podsFromChannel = async (path, channel) => {
  try {
    const response = await fetch(`${BASE_URL}${path}/channel?title=${channel}`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export const like = async (id) => {
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
