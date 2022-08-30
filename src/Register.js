import React from 'react';
import {
  Button,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';
//import { useEffect, useState } from 'react';
//import BouncyCheckbox from "react-native-bouncy-checkbox",

const Register = () => {
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
              height: '97%',
              padding: 20,
            }}>
            <View style={styles.mainContainer}>
              <Text style={styles.mainHeader}>Register </Text>
              <Text>Enter your Details to Register</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Full Name </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Enter your full name'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Your E-mail </Text>
                <TextInput
                autoCorrect={false}
                onFocus={() =>{
                  onFocus();
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);

                }}
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

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Re-enter Password </Text>
                <TextInput style={styles.inputStyle} placeholder={''} />
              </View>

              {/* submit button  */}
              <View>
                <TouchableOpacity
                  style={{
                     alignItems: 'center',
                     padding: 10,
                     margin: 20,
                     borderRadius: 25,
                    //backgroundColor: '#f1c40f',
                  }}>
                  <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                  <Text style={styles.textSign}> Submit </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{color: '#000'}}>
                  By creating an account, you agree to the LMS
                  <Text style={{color: '#00f'}}> Conditions of Use </Text>
                  and
                  <Text style={{color: '#00f'}}> Privacy Notice. </Text>
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
                    <Text style={{color: '#00f', flexDirection: 'row'}}> LogIn</Text>
        
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

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 5,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 35,
    color: 'black',
    fontWeight: '600',
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
  textSign: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
},
signIn: {
  width: 250,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row'
},
});

export default Register;
