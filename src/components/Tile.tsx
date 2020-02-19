import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getActiveTile, incrementScore } from "../ducks/game";
import { Screens } from "../constants";

import { COLORS } from "../style";

interface Props {
  tileId: string;
}

export default ({ tileId }: Props) => {
  const wasPressed = useRef(false);
  const dispatch = useDispatch();
  const isActive: Boolean = tileId === useSelector(getActiveTile);
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
    }
  }, [isActive]);

  return (
    <View style={styles.container} key={tileId}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: isActive ? COLORS.Secondary : "white"
        }}
        onPressIn={handlePress}
      >
        <Text />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000"
  }
});
