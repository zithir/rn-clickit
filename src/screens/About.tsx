import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import globalStyles, { COLORS } from '../style';

export default () => (
  <View style={globalStyles.centerItems}>
    <Text style={styles.about__text}>
      The goal of the game is to click on the red&nbsp;
      <FontAwesome name="square" size={20} color={COLORS.Danger} /> and not
      green&nbsp;
      <FontAwesome name="square" size={20} color={COLORS.Secondary} />{' '}
      highlighted tiles.
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
