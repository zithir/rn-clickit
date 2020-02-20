import React, { ReactElement } from 'react';
import { View, Text, Picker } from 'react-native';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';

import globalStyle from '../style';

const makePickerItems = R.map(({ label, value }) => (
  <Picker.Item label={label} value={value} key={label} />
));

const ConfigurationPicker = ({
  name,
  items,
  valueSelector,
  setValueAction,
}): ReactElement => {
  const dispatch = useDispatch();
  const currentValue = useSelector(valueSelector);

  return (
    <View style={globalStyle.centerItems}>
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

export default ConfigurationPicker;
