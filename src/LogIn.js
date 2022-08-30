import React from 'react';
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
import {SafeAreaView} from 'react-native'

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import FontAwesome from 'react-native-vactor'

const LogIn = ({navigation}) => {

   
    return (
      <SafeAreaView>
        <ScrollView>
        <KeyboardAvoidingView>
          <View style={{marginBottom: 40}}>
            <View
              style={{
                borderWidth: 1,
                margin: 15,
                borderRadius: 4,
                backgroundColor: '#fff',
                borderColor: '#d3d3d3',
                height: '98%',
                padding: 20,
              }}>
              <View style={styles.mainContainer}>
                <Text style={styles.mainHeader}>Log In </Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Your E-mail </Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                  />
                </View>
  
                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Password </Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder={'At least 8 characters'}
                  />
                </View>
  
                {/* submit button  */}
                <View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      padding: 10,
                      margin: 20,
                      borderRadius: 25,
                      backgroundColor: '#f1c40f',
                    }}>
                    <Text style={styles.buttonText}> LogIn </Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{color: '#000'}}>
                  Don't have account? Register
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    // borderWidth: 0.25,
                    width: 300,
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#888',
                    //  marginLeft: 90,
                    color: 'black',
                  }}></View>
  
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#000'}}>
                    Already have an account?
                    
                      <Text style={{color: '#00f', flexDirection: 'row'}}> Sign-In</Text>
          
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      </SafeAreaView>
    );
  };

export default LogIn;

const styles = StyleSheet.create({
    mainContainer: {
      height: '100%',
      padding: 10,
      backgroundColor: '#fff',
    },
    mainHeader: {
      fontSize: 30,
      color: '#344055',
      fontWeight: '400',
      paddingBottom: 1,
    },
    description: {
      fontSize: 20,
      color: '#7d7d7d',
      paddingBottom: 20,
      lineHeight: 25,
    },
  
    inputContainer: {
      marginTop: 20,
    },
    labels: {
      fontWeight: 'bold',
      color: 'black',
      paddingBottom: 5,
      lineHeight: 25,
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    buttonText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
      textAlign: 'center',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
    },
    wrapperText: {
      marginLeft: 10,
      color: '#7d7d7d',
    },
  });
  