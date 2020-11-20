import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      
    
     
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("!", "Kayıt Başarılı ");
  }
  render() {
    return (
      <View style={styles.container}>
       
       <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Adınız"
              underlineColorAndroid='transparent'
              />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Soyadınız"
              underlineColorAndroid='transparent'
              />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Yaşınız"
              underlineColorAndroid='transparent'
            />
        </View>      
        <View style={styles.inputContainer}>     
          <TextInput style={styles.inputs}
              placeholder="Email Adresi"
              underlineColorAndroid='transparent'
              />
        </View> 
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Şifre"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Şifre"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
           />
        </View>
        
         
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.loginText}>Kayıt Ol</Text>
        </TouchableHighlight>

        

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:4444,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:60,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "red",
  },
  loginText: {
    color: 'white',
  }
});
