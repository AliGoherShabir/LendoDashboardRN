import React, {FC, JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigators';

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;
