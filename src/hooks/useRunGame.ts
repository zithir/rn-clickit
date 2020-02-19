import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as R from "ramda";
import {
  setActiveTile,
  getGridSize,
  stopGame,
  updateHighestScore
} from "../ducks/game";
import { useUpdateHighestScore } from "./useUpdateHighestScore";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomTile = (gridSize: number) =>
  `${getRandomInt(gridSize)}${getRandomInt(gridSize)}`;

// The handles active game session

export default () => {
  const dispatch = useDispatch();
  const isActiveTile = useRef(false);
  const gridSize: number = useSelector(getGridSize);

  const dispatchActivateRandomTitle = () =>
    R.compose(dispatch, setActiveTile, getRandomTile)(gridSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActiveTile.current) {
        dispatch(setActiveTile(null));
      } else {
        dispatchActivateRandomTitle();
      }
      isActiveTile.current = !isActiveTile.current;
    }, 600);

    return () => {
      // Clearup on unmount - stop interval, reset game stats and update highest score
      dispatch(stopGame());
      dispatch(updateHighestScore());
      clearInterval(interval);
    };
  });
};
