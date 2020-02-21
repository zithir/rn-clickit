import React, { useCallback, useEffect, useRef, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getActiveTile, ActiveTile } from '../ducks/game';
import { incrementScore } from '../ducks/score';
import { Screens } from '../constants';

import { COLORS } from '../style';

interface Props {
  tileId: string;
}

const getColor = (isActive, isClickable): string => {
  if (isActive) {
    return isClickable ? COLORS.Danger : COLORS.Secondary;
  }
  return COLORS.Background;
};

// TODO: Optimize by passing isActive and isClicable from TileGrid, memoize

export default ({ tileId }: Props): ReactElement => {
  const wasPressed = useRef(false);
  const dispatch = useDispatch();
  const activeTile: ActiveTile = useSelector(getActiveTile);
  const isActive = tileId === activeTile.tileId;
  const { clickable } = activeTile;
  const { navigate } = useNavigation();

  useEffect(() => {
    wasPressed.current = false;
  }, [isActive]);

  const handlePress = useCallback(() => {
    if (isActive && clickable) {
      if (!wasPressed.current) {
        dispatch(incrementScore());
        wasPressed.current = true;
      }
    } else {
      alert('Game over');
      navigate(Screens.MAIN_MENU);
    }
  }, [isActive]);

  return (
    <View style={styles.container} key={tileId}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: getColor(isActive, clickable),
        }}
        onPressIn={handlePress}
      >
        <Text />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#000',
  },
});
