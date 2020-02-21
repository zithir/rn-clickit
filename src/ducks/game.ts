import { createActions, handleActions } from 'redux-actions';
import * as R from 'ramda';

import { Actions } from './types';

const REDUCER_NAME = 'game';

export const { setActiveTile, stopGame }: Actions = createActions(
  'SET_ACTIVE_TILE',
  'STOP_GAME',
);

export const getActiveTile: Function = R.path([REDUCER_NAME, 'activeTile']);

export interface ActiveTile {
  tileId: string;
  clickable: boolean;
}

interface State {
  activeTile: ActiveTile;
  currentScore: number;
  highestScore: number;
}
const defaultState: State = {
  activeTile: { tileId: null, clickable: false },
  currentScore: 0,
  highestScore: 0,
};

const reducer: Function = handleActions(
  {
    [setActiveTile]: (state, { payload }) => ({
      ...state,
      activeTile: payload,
    }),
    [stopGame]: state => ({
      ...state,
      activeTile: defaultState.activeTile,
    }),
  },
  defaultState,
);

export default reducer;
