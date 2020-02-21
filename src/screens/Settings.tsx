import React from 'react';
import { View } from 'react-native';

import Configuration from '../components/Configuration';

import globalStyles from '../style';

export default () => (
  <View style={globalStyles.centerItems}>
    <Configuration />
  </View>
);
