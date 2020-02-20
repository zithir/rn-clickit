import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as R from 'ramda';
import {
  setActiveTile,
  getGridSize,
  stopGame,
  updateHighestScore,
  getGameSpeed,
} from '../ducks/game';

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

const getRandomTile = (gridSize: number): number =>
  `${getRandomInt(gridSize)}${getRandomInt(gridSize)}`;

// The handles active game session

export default (): void => {
  const dispatch = useDispatch();
  const isActiveTile = useRef(false);
  const gridSize: number = useSelector(getGridSize);
  const gameSpeed: number = useSelector(getGameSpeed);

  const dispatchActivateRandomTitle = (): void =>
    R.compose(dispatch, setActiveTile, getRandomTile)(gridSize);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActiveTile.current) {
        dispatch(setActiveTile(null));
      } else {
        dispatchActivateRandomTitle();
      }
      isActiveTile.current = !isActiveTile.current;
    }, gameSpeed);

    return (): void => {
      // Clearup on unmount - stop interval, reset game stats and update highest score
      dispatch(stopGame());
      dispatch(updateHighestScore());
      clearInterval(interval);
    };
  });
};
