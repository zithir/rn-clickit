import * as R from "ramda";
import { AsyncStorage } from "react-native";

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error("Could not save data to async storage Error:", e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error("Could not load data from async storage Error:", e);
  }
};

export const loadHighestScore = async () => {
  const score = await getData("score");
  return score || 0;
};
