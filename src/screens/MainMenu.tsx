import React, { ReactElement } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Configuration from '../components/Configuration';
import MaxScore from '../components/MaxScore';
import { Screens } from '../constants';

import { Navigation } from '../types';

import globalStyles, { COLORS, ICON_SIZE } from '../style';

export default ({ navigation: { navigate } }: Navigation): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.centerItems]}>
        <MaxScore />
      </View>
      <View style={{ flex: 1 }}>
        <View style={globalStyles.centerItems}>
          <TouchableOpacity
            style={[styles.bigButton]}
            onPress={(): void => navigate(Screens.GAME)}
          >
            <Text style={styles.bigButton_text}>Start game</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigate(Screens.ABOUT)}>
            <AntDesign
              name="questioncircleo"
              size={ICON_SIZE}
              color={COLORS.Secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate(Screens.SETTINGS)}>
            <AntDesign name="setting" size={ICON_SIZE} color={COLORS.Warning} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bigButton: {
    width: 200,
    height: 60,
    backgroundColor: COLORS.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton_text: {
    color: 'white',
    fontSize: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: ICON_SIZE / 4,
  },
});
