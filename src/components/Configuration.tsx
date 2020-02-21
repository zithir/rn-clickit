import React, { ReactElement } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  getGridSize,
  setGridSize,
  getGameSpeed,
  setGameSpeed,
} from '../ducks/settings';
import { GameSpeed, GridSize } from '../constants';
import ConfigurationPicker from './ConfigurationPicker';
import { setHighestScore } from '../ducks/score';

import globalStyle from '../style';

export default (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <View style={[globalStyle.centerItems]}>
      <Text style={globalStyle.heading}>Select difficulty: </Text>
      <View style={[globalStyle.centerItems]}>
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
        <Button
          title="Reset score"
          onPress={() => {
            dispatch(setHighestScore(0));
          }}
        />
      </View>
    </View>
  );
};
