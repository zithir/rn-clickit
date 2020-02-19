import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import SizePicker from "./SizePicker";
import { Screens } from "../constants";

import { Navigation } from "../types";

export default ({ navigation: { navigate } }: Navigation) => (
  <View style={styles.container}>
    <SizePicker />
    <Button
      title="Start game"
      onPress={() => navigate(Screens.GAME, { name: "Jane" })}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
