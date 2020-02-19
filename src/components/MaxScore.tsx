import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { getHighestScore } from "../ducks/game";

import globalStyle from "../style";

export default () => {
  const highestScore = useSelector(getHighestScore);
  return (
    <View>
      <Text style={globalStyle.heading}>Best Score: {highestScore}</Text>
    </View>
  );
};
