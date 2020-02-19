import { createActions, handleActions } from "redux-actions";

import * as R from "ramda";

interface State {
  gridSize: number;
  activeTile: null | string;
  score: number;
}
const defaultState: State = { gridSize: 3, activeTile: null, score: 0 };

interface Actions {
  [key: string]: Function;
}

export const {
  setGridSize,
  setActiveTile,
  incrementScore,
  resetGame
}: Actions = createActions(
  "SET_GRID_SIZE",
  "SET_ACTIVE_TILE",
  "INCREMENT_SCORE",
  "RESET_GAME"
);

export const getGridSize: Function = R.prop("gridSize");
export const getActiveTile: Function = R.prop("activeTile");
export const getScore: Function = R.prop("score");

const reducer: Function = handleActions(
  {
    [setGridSize]: (state, action) => ({
      ...state,
      gridSize: action.payload
    }),
    [setActiveTile]: (state, action) => ({
      ...state,
      activeTile: action.payload
    }),
    [incrementScore]: state => ({
      ...state,
      score: getScore(state) + 1
    }),
    [resetGame]: state => ({
      ...state,
      score: defaultState.score,
      activeTile: defaultState.activeTile
    })
  },
  defaultState
);

export default reducer;
