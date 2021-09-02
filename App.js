import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  MainStack
} from './views';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Home'} 
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name='Home' component={MainStack}/>
        {/*<Drawer.Screen name='Contact' component={ContactStackScreen}/>*/}
      </Drawer.Navigator>      
    </NavigationContainer>
  );
}
