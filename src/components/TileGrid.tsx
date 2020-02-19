import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import * as R from "ramda";

import { useSelector } from "react-redux";
import { getGridSize } from "../ducks";

import Tile from "./Tile";

const makeTile = rowIndex => tileIndex => (
  <Tile tileId={`${rowIndex}${tileIndex}`} key={tileIndex} />
);

const makeRow = size => rowIndex => (
  <View style={{ flex: 1, flexDirection: "row" }} key={rowIndex}>
    {R.times(itemIndex => makeTile(rowIndex)(itemIndex), size)}
  </View>
);

const makeGrid = size => R.times(makeRow(size), size);

const TileGrid = () => {
  const size = useSelector(getGridSize);
  return <View style={styles.container}>{makeGrid(size)}</View>;
};

TileGrid.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TileGrid;
