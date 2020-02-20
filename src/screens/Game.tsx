import React, { ReactElement } from 'react';
import { View } from 'react-native';

import TitleGrid from '../components/TileGrid';
import useRungame from '../hooks/useRunGame';

const Game = (): ReactElement => {
  useRungame();

  return (
    <View style={{ flex: 1 }}>
      <TitleGrid />
    </View>
  );
};

export default Game;
