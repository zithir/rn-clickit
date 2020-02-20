import { createActions, handleActions } from 'redux-actions';
import * as R from 'ramda';

import { Actions } from './types';

const REDUCER_NAME = 'settings';

export const { setGridSize, setGameSpeed }: Actions = createActions(
  'SET_GRID_SIZE',
  'SET_GAME_SPEED',
);

export const getGridSize: Function = R.path([REDUCER_NAME, 'gridSize']);
export const getGameSpeed: Function = R.path([REDUCER_NAME, 'gameSpeed']);

interface State {
  gridSize: number;
  gameSpeed: number;
}
const defaultState: State = {
  gridSize: 3,
  gameSpeed: 750,
};

const reducer: Function = handleActions(
  {
    [setGridSize]: (state, { payload }) => ({
      ...state,
      gridSize: payload,
    }),
    [setGameSpeed]: (state, { payload }) => ({
      ...state,
      gameSpeed: payload,
    }),
  },
  defaultState,
);

export default reducer;
