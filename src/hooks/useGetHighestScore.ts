import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadHighestScore } from "../storage";
import { setHighestScore } from "../ducks/game";

export const useGetHighestScore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getScoreFromStorage = async () => {
      const score = await loadHighestScore();
      dispatch(setHighestScore(score));
    };

    getScoreFromStorage();
  }, []);
};
