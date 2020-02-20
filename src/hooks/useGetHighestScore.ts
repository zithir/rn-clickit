import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadHighestScore } from '../storage';
import { setHighestScore } from '../ducks/score';

export default (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getScoreFromStorage = async (): Promise<void> => {
      const score = await loadHighestScore();
      dispatch(setHighestScore(score));
    };

    getScoreFromStorage();
  }, []);
};
