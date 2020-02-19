import {
  createActions,
  createAction,
  handleActions,
  combineActions
} from "redux-actions";

import * as R from "ramda";

const defaultState = { gridSize: 3, activeTile: null, score: 0 };

export const {
  setGridSize,
  setActiveTile,
  incrementScore,
  resetGame
} = createActions(
  "SET_GRID_SIZE",
  "SET_ACTIVE_TILE",
  "INCREMENT_SCORE",
  "RESET_GAME"
);

export const getGridSize = R.prop("gridSize");
export const getActiveTile = R.prop("activeTile");
export const getScore = R.prop("score");

const reducer = handleActions(
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
