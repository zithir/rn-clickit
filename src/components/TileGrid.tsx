import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import * as R from 'ramda';

import { useSelector } from 'react-redux';
import { getGridSize } from '../ducks/settings';

import Tile from './Tile';

const makeTile = (rowIndex: number) => (tileIndex: number): ReactElement => (
  <Tile tileId={`${rowIndex}${tileIndex}`} key={tileIndex} />
);

const makeRow = (size: number) => (rowIndex: number): ReactElement => (
  <View style={{ flex: 1, flexDirection: 'row' }} key={rowIndex}>
    {R.times((itemIndex: number) => makeTile(rowIndex)(itemIndex), size)}
  </View>
);

const makeGrid = (size: number): [ReactElement] => R.times(makeRow(size), size);

export default (): ReactElement => {
  const size: number = useSelector(getGridSize);

  return <View style={styles.container}>{makeGrid(size)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
