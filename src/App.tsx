import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import useGetHighestScore from './hooks/useGetHighestScore';
import { MainMenu, Game, About, Settings } from './screens';
import { Screens } from './constants';
import gameReducer from './ducks/game';
import settingsReducer from './ducks/settings';
import scoreReducer, {
  getCurrentScore,
  updateHighestScoreMiddleware,
  applyScoreModifiersMiddleware,
} from './ducks/score';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    game: gameReducer,
    settings: settingsReducer,
    score: scoreReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      updateHighestScoreMiddleware,
      applyScoreModifiersMiddleware,
    ),
  ),
);
const Stack = createStackNavigator();

const App = (): ReactElement => {
  useGetHighestScore();
  const score: number = useSelector(getCurrentScore);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.MAIN_MENU}
          component={MainMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.GAME}
          component={Game}
          options={{ title: `Score ${score}` }}
        />
        <Stack.Screen name={Screens.ABOUT} component={About} />
        <Stack.Screen name={Screens.SETTINGS} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default (): ReactElement => (
  <Provider store={store}>
    <App />
  </Provider>
);
