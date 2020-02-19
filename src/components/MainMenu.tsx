import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import SizePicker from "./SizePicker";
import MaxScore from "./MaxScore";
import { Screens } from "../constants";
import { useGetHighestScore } from "../hooks/useGetHighestScore";
import { useUpdateHighestScore } from "../hooks/useUpdateHighestScore";

import { Navigation } from "../types";

import globalStyles, { COLORS } from "../style";

export default ({ navigation: { navigate } }: Navigation) => {
  useGetHighestScore();

  return (
    <View style={styles.container}>
      <View style={[globalStyles.centerItems]}>
        <MaxScore />
      </View>
      <View style={globalStyles.centerItems}>
        <SizePicker />
      </View>
      <View style={globalStyles.centerItems}>
        <TouchableOpacity
          style={[styles.bigButton]}
          onPress={() => navigate(Screens.GAME, { name: "Jane" })}
        >
          <Text style={styles.bigButton_text}>Start game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bigButton: {
    width: 200,
    height: 60,
    backgroundColor: COLORS.Primary,
    alignItems: "center",
    justifyContent: "center"
  },
  bigButton_text: {
    color: "white",
    fontSize: 24
  }
});
