import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import { 
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
 } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent';
import { Contact, MainStack, RootStackScreen } from './views';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './components/Context';

import {
  Provider as PaperProvider, 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme
} from 'react-native-paper'; 

const Drawer = createDrawerNavigator();

export default function App() {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'#ffffff',
      text:'#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background:'#333333',
      text:'#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) =>{
    switch (action.type){
      case 'RETRIEVE_TOKEN':
      return{
        ...prevState,
        userToken:action.token,
        isLoading: false
      };
      case 'LOGIN':
      return{
        ...prevState,
        email: action.id,
        userToken:action.token,
        isLoading: false
      };
      case 'LOGON':
      return{
        ...prevState,
        email: action.id,
        userToken:action.token,
        isLoading: false
      };
      case 'LOGOUT':
      return{
        ...prevState,
        email: null,
        userToken:null,
        isLoading: false
      };
    }
  };

  const [loginState, dispacth] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=>({
    login: async(foundUser)=>{
      const userToken = String(foundUser[0].userToken);
      const email = foundUser[0].email ;
        try{
          await AsyncStorage.setItem('userToken', userToken)
        }catch(e){
          console.log(e);
        }     
      dispacth ({ type: 'LOGIN', id: email, token: userToken})
    },
    logout: async()=>{
      try{
        await AsyncStorage.removeItem('userToken')
      }catch(e){
        console.log(e);
      }
      dispacth ({ type: 'LOGOUT'})
    },
    logon:()=>{
      setUserToken('tokenTeste');
      setIsLoading(false);
    },
      toggleTheme:()=>{
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      }
  }), []);

  useEffect(()=>{
    setTimeout(async()=>{
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispacth ({ type: 'LOGON', token: userToken})
    }, 1000)
  },[])

  if(loginState.isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alingItems:'center'}} >
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
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
    </PaperProvider>
  );
}
