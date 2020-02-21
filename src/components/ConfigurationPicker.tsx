import React, { ReactElement } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';

const makePickerItems = R.map(({ label, value }) => (
  <Picker.Item label={label} value={value} key={label} />
));

export default ({
  name,
  items,
  valueSelector,
  setValueAction,
}): ReactElement => {
  const dispatch = useDispatch();
  const currentValue = useSelector(valueSelector);

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Picker
        style={{ width: 150 }}
        selectedValue={currentValue}
        onValueChange={(value): void => {
          dispatch(setValueAction(value));
        }}
      >
        {makePickerItems(items)}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
});
