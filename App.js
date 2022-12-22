import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import AttractionDetail from './src/screens/AttractionDetail';
import Gallery from './src/screens/Gallery';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "AttractionDetail" component={AttractionDetail} />
        <Stack.Screen name = "Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
