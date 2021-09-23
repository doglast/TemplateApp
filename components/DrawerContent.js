import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar, 
  Title, 
  Text, 
  Caption, 
  Paragraph, 
  TouchableRipple,
  Drawer, 
  Switch, 
  useTheme
} from 'react-native-paper';
import {AuthContext} from './Context';

export function DrawerContent(props){
  const paperTheme = useTheme();
  const { logout , toggleTheme } = React.useContext(AuthContext);
  
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 15}}>
              <Avatar.Image 
                source={{uri: 'https://github.com/doglast.png'}}
                size={50}
              />
              <View style={{marginLeft:15, flexDirection:'column'}}>
                <Title style={styles.title}>Douglas E Santos</Title>
                <Caption style={styles.caption}>@dog_lst</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                  <Icon 
                    name="home-outline" 
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}
            />
            {/*<DrawerItem 
                icon={({color, size}) => (
                  <Icon 
                    name="bullhorn-outline" 
                    color={color}
                    size={size}
                  />
                )}
                label="Anuncie"
                onPress={() => {props.navigation.navigate('Profile')}}
            />*/}
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="calendar-month-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Programe-se"
              onPress={() => {props.navigation.navigate('Agenda')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="gesture-double-tap" 
                  color={color}
                  size={size}
                />
              )}
              label="Iterativo"
              onPress={() => {props.navigation.navigate('Promo')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="camera-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Cobertura"
              onPress={() => {props.navigation.navigate('Photo')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="chat-processing-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Editorial"
              onPress={() => {props.navigation.navigate('Blog')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="phone-message-outline" 
                  color={color}
                  size={size}
                />
              )}
              label="Contate-nos"
              onPress={() => {props.navigation.navigate('Contact')}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
              <TouchableRipple onPress={() => {toggleTheme()}}>
                <View style={styles.preference}>
                  <Text>Modo escuro</Text>
                  <View pointerEvents="none">
                      <Switch value={paperTheme.dark}/>
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem 
            icon={({color, size}) => (
                <Icon 
                name="exit-to-app" 
                color={color}
                size={size}
                />
            )}
            label="Sair"
            onPress={() => {logout()}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});