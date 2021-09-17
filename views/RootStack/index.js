import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import { Login, Logon, SplashScreen } from '..';

const RootStack = createStackNavigator();

const RootStackScreen =({navigation}) =>(
  <RootStack.Navigator headerMode ='none'>
    <RootStack.Screen name='SplashScreen' component={SplashScreen} />
    <RootStack.Screen name='Login' component={Login} />
    <RootStack.Screen name='Logon' component={Logon} />
  </RootStack.Navigator>
);

export default RootStackScreen;