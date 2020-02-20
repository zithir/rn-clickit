import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
  getGridSize,
  setGridSize,
  getGameSpeed,
  setGameSpeed,
} from '../ducks/game';
import { GameSpeed, GridSize } from '../constants';
import ConfigurationPicker from './ConfigurationPicker';

import globalStyle from '../style';

export default (): ReactElement => (
  <View style={[globalStyle.centerItems]}>
    <Text style={globalStyle.heading}>Select difficulty: </Text>
    <View style={[globalStyle.centerItems, styles.columns]}>
      <ConfigurationPicker
        name="Speed"
        items={GameSpeed}
        valueSelector={getGameSpeed}
        setValueAction={setGameSpeed}
      />
      <ConfigurationPicker
        name="Size"
        items={GridSize}
        valueSelector={getGridSize}
        setValueAction={setGridSize}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  columns: {
    flex: 1,
    flexDirection: 'row',
  },
});
