/* eslint-disable no-console */
import { AsyncStorage } from 'react-native';

export const storeData = async (key: string, value: any): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Could not save data to async storage Error:', e);
  }
};

const getData = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Could not load data from async storage Error:', e);
    return null;
  }
};

export const loadHighestScore = async (): Promise<number> => {
  const score = await getData('score');
  return Number(score) || 0;
};
