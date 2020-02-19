import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Picker, View, Text } from "react-native";
import { getGridSize, setGridSize } from "../ducks";

const SizePicker = () => {
  const dispatch = useDispatch();
  const size = useSelector(getGridSize);

  return (
    <View>
      <Text>Select difficulty: </Text>
      <Picker
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
