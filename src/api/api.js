const BASE_URL = 'https://midiapi.herokuapp.com/api/v1';

async function getRecent() {
  try {
    const response = await fetch(`${BASE_URL}/pods/ten/recent`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
}

async function getPopular() {
  try {
    const response = await fetch(`${BASE_URL}/pods/ten/popular`);
    return response.json();
  } catch (err) {
    throw Error(err);
  }
}

export {
  getRecent,
  getPopular,
};
