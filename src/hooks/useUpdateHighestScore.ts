import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { storeData } from "../storage";
import {
  getHighestScore,
  getCurrentScore,
  setHighestScore
} from "../ducks/game";

export const useUpdateHighestScore = () => {
  const currentScore = useSelector(getCurrentScore);
  const highestScore = useSelector(getHighestScore);

  useEffect(() => {
    if (highestScore < currentScore) {
      storeData("score", currentScore.toString());
      setHighestScore(currentScore);
    }
  }, [currentScore, highestScore]);
};
