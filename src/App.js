import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Comics from './scenes/Comics';
import ComicScreen from './scenes/ComicScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={"Home"} component={Comics}/>
        <Stack.Screen options={{headerShown: false}} name={"ComicPage"} component={ComicScreen}/>
      </Stack.Navigator>
    </NavigationContainer>  
  ) ;
};
export default App;
