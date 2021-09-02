import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import {
  Home,
  Contact
} from './views';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#c3c',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Home'}
  >
    <HomeStack.Screen 
      name='Home' 
      component={Home}
      options={{
        title:'Zine',
        headerLeft: () =>(          
          <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.openDrawer()} >
        <Icon 
        name='ios-menu' 
        size={25} 
        color='#fff'      
      ></Icon>
      </TouchableOpacity> 
        )
      }}
    />
  </HomeStack.Navigator>
)

const ContactStack = createStackNavigator();
const ContactStackScreen = ({navigation}) =>(
  <ContactStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#c3c',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Contact'}
  >
    <ContactStack.Screen 
      name='Contact' 
      component={Contact}
      options={{
        title:'Entre em contato conosco',
        headerLeft: () =>(
          <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.openDrawer()} >
            <Icon 
            name='ios-menu' 
            size={25} 
            color='#fff' 
            ></Icon>
          </TouchableOpacity>             
        )
      }} 
    />
  </ContactStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Home'} 
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen name='Home' component={HomeStackScreen}/>
        <Drawer.Screen name='Contact' component={ContactStackScreen}/>
      </Drawer.Navigator>      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1 
  },
  menuButton:{
    tintColor:'#fff',
    marginLeft:20
  }
});