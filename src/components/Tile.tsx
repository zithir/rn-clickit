import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PropTypes from "prop-types";

import { getActiveTile, incrementScore, resetGame } from "../ducks/game";
import { Screens } from "../constants";

const Tile = ({ tileId }) => {
  const wasPressed = useRef(false);
  const dispatch = useDispatch();
  const isActive = tileId === useSelector(getActiveTile);
  const { navigate } = useNavigation();

  useEffect(() => {
    wasPressed.current = false;
  }, [isActive]);

  const handlePress = useCallback(() => {
    if (isActive) {
      if (!wasPressed.current) {
        dispatch(incrementScore());
        wasPressed.current = true;
      }
    } else {
      alert("Game over");
      navigate(Screens.MAIN_MENU);
      dispatch(resetGame());
    }
  }, [isActive]);

  return (
    <View style={styles.container} key={tileId}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: isActive ? "green" : "white" }}
        onPressIn={handlePress}
      >
        <Text />
      </TouchableOpacity>
    </View>
  );
};

Tile.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000"
  }
});

export default Tile;
