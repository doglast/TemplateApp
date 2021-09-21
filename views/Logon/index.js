import React, {useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';

import {AuthContext} from '../../components/Context'

const Logon = ({navigation}) => {

  const { logon } = React.useContext(AuthContext);

  const [data, setData ] = React.useState({
    email:'',
    password:'',
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true
  })
  
  const textInputChange = (val) =>{
    if(val.length !== 0){
      setData({
        ...data,
        email: val,
        check_textInputChange:true
      })
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      })
    }
  }

  const handlePasswordChange = (val) =>{
      setData({
        ...data,
        password: val,
      })
  }

  const handleConfirmPasswordChange = (val) =>{
    setData({
      ...data,
      confirm_password: val,
    })
}
  const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const updateConfirmSecureTextEntry = () =>{
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}> Cadastre-se agora!</Text>
      </View>
      <Animatable.View 
        animation='fadeInUpBig'
        style={styles.footer}
      >
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name='user-o'
            color='#05375a'
            size={20}
          />
          <TextInput
            placeholder='email@email.com'
            style={styles.textInput}
            autoCapitalize='none'
            keyboardType='email-address'
            onChangeText={(val)=>textInputChange(val)}
          />
          {data.check_textInputChange ? 
            <Animatable.View
              animation='bounceInz'
            >
              <Feather
              name='check-circle'
              color='green'
              size={20}
            />
            </Animatable.View>           
          :null}       
        </View>
        <Text style={styles.text_footer, {marginTop:30}}>Senha</Text>
        <View style={styles.action}>
          <FontAwesome
            name='lock'
            color='#05375a'
            size={20}
          />
          <TextInput
            placeholder='Senha'
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true: false}
            onChangeText={(val)=> handlePasswordChange(val)}    
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry?
            <Feather
              name='eye-off'
              color='gray'
              size={20}
            />:
            <Feather
              name='eye'
              color='gray'
              size={20}
            />
            }
          </TouchableOpacity>       
        </View>
        <Text style={styles.text_footer, {marginTop:30}}>Confirme a senha</Text>
        <View style={styles.action}>
          <FontAwesome
            name='lock'
            color='#05375a'
            size={20}
          />
          <TextInput
            placeholder='Confirme a senha'
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true: false}
            onChangeText={(val)=> handleConfirmPasswordChange(val)}    
          />
          <TouchableOpacity
            onPress={updateConfirmSecureTextEntry}
          >
            {data.confirm_secureTextEntry?
            <Feather
              name='eye-off'
              color='gray'
              size={20}
            />:
            <Feather
              name='eye'
              color='gray'
              size={20}
            />
            }
          </TouchableOpacity>       
        </View>
        
        <View style={styles.button}>
        <TouchableOpacity
              style={styles.signIn}
              onPress={()=>{logon()}}
            >
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={[styles.textSign,{color:'#fff'}]}>Cadastre-se</Text>
              </LinearGradient>
            </TouchableOpacity> 
            <TouchableOpacity
              onPress={()=> navigation.navigate('Login')}
              style={[styles.signIn,{
                borderColor:'#009387',
                borderWidth:1,
                marginTop:15
              }]}
            >
              <Text style={[styles.textSign,{color:'#009387'}]}>Já tenho conta</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>
    
    </View>
  )
};

export default Logon;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    }
  });