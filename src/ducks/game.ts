import { createActions, handleActions } from 'redux-actions';
import * as R from 'ramda';

import { storeData } from '../storage';
import { Actions } from './types';

const REDUCER_NAME = 'game';

export const {
  setActiveTile,
  incrementScore,
  stopGame,
  setHighestScore,
  resetCurrentScore,
  updateHighestScore,
}: Actions = createActions(
  'SET_ACTIVE_TILE',
  'INCREMENT_SCORE',
  'STOP_GAME',
  'SET_HIGHEST_SCORE',
  'RESET_CURRENT_SCORE',
  'UPDATE_HIGHEST_SCORE',
);

export const getActiveTile: Function = R.path([REDUCER_NAME, 'activeTile']);
export const getCurrentScore: Function = R.path([REDUCER_NAME, 'currentScore']);
export const getHighestScore: Function = R.path([REDUCER_NAME, 'highestScore']);

export const updateHighestScoreMiddleware: Function = ({
  getState,
  dispatch,
}) => (next): any => (action): any => {
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

interface State {
  activeTile: null | string;
  currentScore: number;
  highestScore: number;
}
const defaultState: State = {
  activeTile: null,
  currentScore: 0,
  highestScore: 0,
};

const reducer: Function = handleActions(
  {
    [setActiveTile]: (state, { payload }) => ({
      ...state,
      activeTile: payload,
    }),
    [incrementScore]: state => {
      console.log('State', state.currentScore);

      return {
        ...state,
        currentScore: state.currentScore + 1,
      };
    },
    [setHighestScore]: (state, { payload }) => ({
      ...state,
      highestScore: payload,
    }),
    [stopGame]: state => ({
      ...state,
      activeTile: defaultState.activeTile,
    }),
    [resetCurrentScore]: state => ({
      ...state,
      currentScore: defaultState.currentScore,
    }),
  },
  defaultState,
);

export default reducer;
