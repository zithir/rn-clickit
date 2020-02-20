import { createActions, handleActions } from 'redux-actions';
import * as R from 'ramda';

import { storeData } from '../storage';
import { Actions } from './types';
import { getGameSpeed, getGridSize } from './settings';
import { GameSpeed, GridSize } from '../constants';

const REDUCER_NAME = 'score';

const setPayload = R.set(R.lensProp('payload'));

const valueEquals = R.propEq('value');

const findIndexIn = R.curry((comparator, array, value) =>
  R.findIndex(comparator(value), array),
);

export const {
  incrementScore,
  setHighestScore,
  resetCurrentScore,
  updateHighestScore,
}: Actions = createActions(
  'INCREMENT_SCORE',
  'SET_HIGHEST_SCORE',
  'RESET_CURRENT_SCORE',
  'UPDATE_HIGHEST_SCORE',
);

export const getCurrentScore: Function = R.path([REDUCER_NAME, 'currentScore']);
export const getHighestScore: Function = R.path([REDUCER_NAME, 'highestScore']);

export const updateHighestScoreMiddleware = ({ getState, dispatch }) => (
  next,
): any => (action): any => {
  if (action.type === 'UPDATE_HIGHEST_SCORE') {
    const state = getState();
    const currentScore = getCurrentScore(state);
    const highestScore = getHighestScore(state);

    if (highestScore < currentScore) {
      storeData('score', currentScore.toString());
      dispatch(setHighestScore(currentScore));
    }
    dispatch(resetCurrentScore());
  }

  next(action);
};

export const applyScoreModifiersMiddleware = ({ getState }) => (next): any => (
  action,
): any => {
  if (action.type === 'INCREMENT_SCORE') {
    const state = getState();

    const gridSizeModifier = R.compose(
      R.inc,
      findIndexIn(valueEquals, GridSize),
      getGridSize,
    )(state);

    const gameSpeedModifier = R.compose(
      R.inc,
      findIndexIn(valueEquals, GameSpeed),
      getGameSpeed,
    )(state);

    next(setPayload(gridSizeModifier * gameSpeedModifier, action));
  } else {
    next(action);
  }
};

interface State {
  currentScore: number;
  highestScore: number;
}
const defaultState: State = {
  currentScore: 0,
  highestScore: 0,
};

const reducer: Function = handleActions(
  {
    [incrementScore]: (state, { payload }) => ({
      ...state,
      currentScore: state.currentScore + payload,
    }),
    [setHighestScore]: (state, { payload }) => ({
      ...state,
      highestScore: payload,
    }),
    [resetCurrentScore]: state => ({
      ...state,
      currentScore: defaultState.currentScore,
    }),
  },
  defaultState,
);

export default reducer;
