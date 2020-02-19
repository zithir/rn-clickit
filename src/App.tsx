import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainMenu, Game } from "./components";
import { Provider, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { Screens } from "./constants";
import gameReducer, {
  getCurrentScore,
  updateHighestScoreMiddleware
} from "./ducks/game";

const store = createStore(
  gameReducer,
  applyMiddleware(updateHighestScoreMiddleware)
);
const Stack = createStackNavigator();

const App = () => {
  const score: number = useSelector(getCurrentScore);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.MAIN_MENU}
          component={MainMenu}
          options={{ title: "Welcome to the game" }}
        />
        <Stack.Screen
          name={Screens.GAME}
          component={Game}
          options={{ title: `Score ${score}` }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
