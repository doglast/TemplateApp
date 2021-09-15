import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { 
  Home, 
  Contact, 
  Photo, 
  Agenda,
  TV,
  Promo,
  Blog 
} from '..';


const Tab = createMaterialBottomTabNavigator();

const MainStack = () =>{
  return(
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#ffff'
      barStyle={{ backgroundColor: '#303030' }}
    >
      <Tab.Screen 
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel:'Menu',
          tabBarColor:'#303030',
          tabBarIcon:({color}) =>(
            <Icon name='ios-home' color={color} size={24}/>
          ),
        }}
      />
      {/**/}
      <Tab.Screen 
        name='Photo'
        component={PhotoStackScreen}
        options={{
          tabBarLabel:'Fotos',
          tabBarColor:'#dc3545',
          tabBarIcon:({color}) =>(
            <Icon name='ios-camera' color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen 
        name='Agenda'
        component={AgendaStackScreen}
        options={{
          tabBarLabel:'Agenda',
          tabBarColor:'#00c8ff',
          tabBarIcon:({color}) =>(
            <Icon name='ios-calendar-outline' color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen 
        name='Blog'
        component={BlogStackScreen}
        options={{
          tabBarLabel:'Blog',
          tabBarColor:'#e83e8c',
          tabBarIcon:({color}) =>(
            <Icon name='ios-chatbubble-ellipses-outline' color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen 
        name='Promocoes'
        component={PromoStackScreen}
        options={{
          tabBarLabel:'Promoções',
          tabBarColor:'#38e860',
          tabBarIcon:({color}) =>(
            <Icon name='ios-gift-outline' color={color} size={24}/>
          ),
        }}
      />
      <Tab.Screen 
        name='TV'
        component={TVStackScreen}
        options={{
          tabBarLabel:'TV',
          tabBarColor:'#dc3545',
          tabBarIcon:({color}) =>(
            <Icon name='ios-tv-outline' color={color} size={24}/>
          ),
        }}
      />
    </Tab.Navigator>
    
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#303030',
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
        backgroundColor:'#303030',
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

const PromoStack = createStackNavigator();
const PromoStackScreen = ({navigation}) =>(
  <PromoStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#38e860',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Promo'}
  >
    <PromoStack.Screen 
      name='Promo' 
      component={Promo}
      options={{
        title:'Promoções',
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
  </PromoStack.Navigator>
)

const PhotoStack = createStackNavigator();
const PhotoStackScreen = ({navigation}) =>(
  <PhotoStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#dc3545',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Home'}
  >
    <PhotoStack.Screen 
      name='Photo' 
      component={Photo}
      options={{
        title:'Últimas fotos',
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
  </PhotoStack.Navigator>
)

const BlogStack = createStackNavigator();
const BlogStackScreen = ({navigation}) =>(
  <BlogStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#e83e8c',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Blog'}
  >
    <BlogStack.Screen 
      name='Blog' 
      component={Blog}
      options={{
        title:'Blog',
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
  </BlogStack.Navigator>
)

const TVStack = createStackNavigator();
const TVStackScreen = ({navigation}) =>(
  <TVStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#dc3545',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'TV'}
  >
    <TVStack.Screen 
      name='TV' 
      component={TV}
      options={{
        title:'TV',
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
  </TVStack.Navigator>
)

const AgendaStack = createStackNavigator();
const AgendaStackScreen = ({navigation}) =>(
  <AgendaStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#00c8ff',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}
    initialRouteName={'Agenda'}
  >
    <AgendaStack.Screen 
      name='Agenda' 
      component={Agenda}
      options={{
        title:'Agenda',
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
  </AgendaStack.Navigator>
)

export default MainStack;

const styles = StyleSheet.create({
  container:{
    flex: 1 
  },
  menuButton:{
    tintColor:'#fff',
    marginLeft:20
  }
});