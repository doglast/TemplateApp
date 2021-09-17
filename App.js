import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import { Contact, MainStack, RootStackScreen } from './views';

import {AuthContext} from './components/Context'

const Drawer = createDrawerNavigator();

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(()=>({
    login:()=>{
      setUserToken('tokenTeste');
      setIsLoading(false);
    },
    logout:()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    logon:()=>{
      setUserToken('tokenTeste');
      setIsLoading(false);
    },
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000)
  },[])

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alingItems:'center'}} >
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props}/>} 
          screenOptions={{
            headerShown: false
          }}
        >
          <Drawer.Screen name='Main' component={MainStack}/>
          <Drawer.Screen name='Contact' component={Contact}/>
        </Drawer.Navigator>
        ):<RootStackScreen/>
        }  
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
