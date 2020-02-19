import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import SizePicker from "./SizePicker";
import { Screens } from "../constants";

const MainMenu = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <SizePicker />
    <Button
      title="Start game"
      onPress={() => navigate(Screens.GAME, { name: "Jane" })}
    />
  </View>
);

MainMenu.propTypes = {};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
