/* eslint-disable no-console */
import { AsyncStorage } from 'react-native';
import * as R from 'ramda';

const getStorageKeyMeta = R.path(['meta', 'storageKey']);

export const storeData = async (key: string, value: any): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Could not save data to async storage Error:', e);
  }
};

export const getData = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.error('Could not load data from async storage Error:', e);
    return null;
  }
};

// metaCreator that extends actions's meta object with storageKey of specified value
export const addStorageKeyMeta = key => meta => ({
  ...meta,
  storageKey: key,
});

export const saveToStorageMiddleware = () => (next): any => (action): any => {
  if (getStorageKeyMeta(action)) {
    storeData(
      getStorageKeyMeta(action),
      action.payload ? action.payload.toString() : null,
    );
  }
  next(action);
};
