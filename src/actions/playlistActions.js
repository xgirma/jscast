import {SELECT_POD, NEXT_POD, PREVIOUS_POD} from '../constants';

export const selectPod = (id) => ({
  type: SELECT_POD,
  id
});

export const nextPod = () => ({
  type: NEXT_POD,
});

export const previousPod = () => ({
  type: PREVIOUS_POD,
});
