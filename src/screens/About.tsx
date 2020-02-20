import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../style';

export default () => (
  <View style={globalStyles.centerItems}>
    <Text style={styles.about__text}>
      The goal of the game is to click on the highlighted tiles.
    </Text>
    <Text style={styles.about__text}>Do not miss!</Text>
    <Text style={styles.about__text}>Good luck and have fun.</Text>
  </View>
);

const styles = StyleSheet.create({
  about__text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
