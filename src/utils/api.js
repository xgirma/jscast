const BASE_URL = 'https://midiapi.herokuapp.com/api/v1';

const getPodcasts = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
};

export default {
  getPods(path) {
    return getPodcasts(path);
  },
};
