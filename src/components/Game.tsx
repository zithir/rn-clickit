import React from "react";
import { View } from "react-native";

import TitleGrid from "./TileGrid";
import useRungame from "../hooks/useRunGame";

const Game = () => {
  useRungame();

  return (
    <View style={{ flex: 1 }}>
      <TitleGrid />
    </View>
  );
};

export default Game;
