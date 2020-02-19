import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as R from "ramda";
import { setActiveTile, getGridSize, resetGame } from "../ducks/game";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomTile = (gridSize: number) =>
  `${getRandomInt(gridSize)}${getRandomInt(gridSize)}`;

// The handles active game session

export default () => {
  const dispatch = useDispatch();
  const isActiveTile = useRef(false);
  const gridSize: number = useSelector(getGridSize);

  const dispatchSetRandomTitle = () =>
    R.compose(dispatch, setActiveTile, getRandomTile)(gridSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActiveTile.current) {
        dispatch(setActiveTile(null));
      } else {
        dispatchSetRandomTitle();
      }
      isActiveTile.current = !isActiveTile.current;
    }, 600);

    // Clearup on unmount - stop interval and reset game stats
    return () => {
      dispatch(resetGame());
      clearInterval(interval);
    };
  });
};
