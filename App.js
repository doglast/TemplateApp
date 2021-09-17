import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import { Contact, MainStack, RootStackScreen } from './views';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props}/>} 
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name='Main' component={MainStack}/>
        <Drawer.Screen name='Contact' component={Contact}/>
      </Drawer.Navigator>   */}    
    </NavigationContainer>
  );
}
