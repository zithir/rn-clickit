import { createActions, handleActions } from "redux-actions";
import * as R from "ramda";
import { storeData } from "../storage";

// TODO: Make individual duck for configuration

interface State {
  gridSize: number;
  gameSpeed: number;
  activeTile: null | string;
  currentScore: number;
  highestScore: number;
}
const defaultState: State = {
  gridSize: 3,
  gameSpeed: 750,
  activeTile: null,
  currentScore: 0,
  highestScore: 0
};

interface Actions {
  [key: string]: any;
}

export const {
  setGridSize,
  setGameSpeed,
  setActiveTile,
  incrementScore,
  stopGame,
  setHighestScore,
  resetCurrentScore,
  updateHighestScore
}: Actions = createActions(
  "SET_GRID_SIZE",
  "SET_GAME_SPEED",
  "SET_ACTIVE_TILE",
  "INCREMENT_SCORE",
  "STOP_GAME",
  "SET_HIGHEST_SCORE",
  "RESET_CURRENT_SCORE",
  "UPDATE_HIGHEST_SCORE"
);

export const getGridSize: Function = R.prop("gridSize");
export const getGameSpeed: Function = R.prop("gameSpeed");
export const getActiveTile: Function = R.prop("activeTile");
export const getCurrentScore: Function = R.prop("currentScore");
export const getHighestScore: Function = R.prop("highestScore");

export const updateHighestScoreMiddleware: Function = ({
  getState,
  dispatch
}) => next => action => {
  if (action.type === "UPDATE_HIGHEST_SCORE") {
    const state = getState();
    const currentScore = getCurrentScore(state);
    const highestScore = getHighestScore(state);

    if (highestScore < currentScore) {
      storeData("score", currentScore.toString());
      dispatch(setHighestScore(currentScore));
    }
    dispatch(resetCurrentScore());
  }

  next(action);
};

const reducer: Function = handleActions(
  {
    [setGridSize]: (state, { payload }) => ({
      ...state,
      gridSize: payload
    }),
    [setGameSpeed]: (state, { payload }) => ({
      ...state,
      gameSpeed: payload
    }),
    [setActiveTile]: (state, { payload }) => ({
      ...state,
      activeTile: payload
    }),
    [incrementScore]: state => ({
      ...state,
      currentScore: getCurrentScore(state) + 1
    }),
    [setHighestScore]: (state, { payload }) => ({
      ...state,
      highestScore: payload
    }),
    [stopGame]: state => ({
      ...state,
      activeTile: defaultState.activeTile
    }),
    [resetCurrentScore]: state => ({
      ...state,
      currentScore: defaultState.currentScore
    })
  },
  defaultState
);

export default reducer;
