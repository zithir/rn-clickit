import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as R from "ramda";

import { useSelector } from "react-redux";
import { getGridSize } from "../ducks/game";

import Tile from "./Tile";

const makeTile = (rowIndex: number) => (tileIndex: number) => (
  <Tile tileId={`${rowIndex}${tileIndex}`} key={tileIndex} />
);

const makeRow = (size: number) => (rowIndex: number) => (
  <View style={{ flex: 1, flexDirection: "row" }} key={rowIndex}>
    {R.times((itemIndex: number) => makeTile(rowIndex)(itemIndex), size)}
  </View>
);

const makeGrid = (size: number) => R.times(makeRow(size), size);

export default () => {
  const size: number = useSelector(getGridSize);

  return <View style={styles.container}>{makeGrid(size)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
