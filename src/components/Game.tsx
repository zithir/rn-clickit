import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import TitleGrid from "./TileGrid";
import useRungame from "../hooks/useRunGame";

const Game = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  useRungame(navigate);
  return (
    <View style={{ flex: 1 }}>
      <TitleGrid />
    </View>
  );
};

Game.propTypes = {};

export default Game;
