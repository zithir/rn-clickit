import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Picker, View, Text } from "react-native";
import { getGridSize, setGridSize } from "../ducks/game";

import globalStyle from "../style";

const SizePicker = () => {
  const dispatch = useDispatch();
  const size: number = useSelector(getGridSize);

  return (
    <View style={globalStyle.centerItems}>
      <Text style={globalStyle.heading}>Select difficulty: </Text>
      <Picker
        style={{ width: 200, height: 100 }}
        selectedValue={size}
        onValueChange={value => {
          dispatch(setGridSize(value));
        }}
      >
        <Picker.Item label="Easy" value={2} />
        <Picker.Item label="Medium" value={3} />
        <Picker.Item label="Hard" value={4} />
        <Picker.Item label="Extreme" value={5} />
      </Picker>
    </View>
  );
};

export default SizePicker;
