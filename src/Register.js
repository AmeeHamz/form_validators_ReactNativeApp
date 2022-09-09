import React,{ useEffect, useState } from 'react';
import {
 // Button,
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
import {showToast, validateUserEmail, validateUserName} from './utils';
import {useForm} from 'react-hook-form';

//import BouncyCheckbox from "react-native-bouncy-checkbox",

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmationPassword, setConfirmationPassword] = useState('');


  const postUser = async () => {
    let bodyData = new FormData();
    bodyData.append('name', name);
    bodyData.append('email', email);
    bodyData.append('password', password);
    bodyData.append('password_confirmation', ConfirmationPassword);

    const requestOptions = {
      method: 'POST',
      headers: {Accept: 'application/json'},
      body: bodyData,
    };

    try {
      const response = await fetch(
        'https://cybexo.dev/cybexo360_0/api/register',
        requestOptions,
      );
      const data = await response.json();

      console.log('..........', data);
    } catch (error) {
      console.log('//////////', JSON.stringify(error));
    }
  };
// const getUserData = async () => {
//  try {
//  const response = await fetch(
  
//   );
//   const myData = await response.json(); 
//   console.log(myData);
//  } catch (error){
//   console.log(error);

//  }
// }; 

// useEffect(() => {
//   getUserData ();
// }, []);
 

  
 const btnAction = () => {
    if (name === '') {
      showToast('Full Name is required.');
    } else if (!validateUserName(name)) {
      showToast('Enter only alphabets!');
    }
    else if (name.length < 3) {
          showToast('enter minimum 4 characters')
      }
//     // else if (lastName === ""){
//     //     showToast("Last Name is required.")
//     // }
//     // else if (!validateUserName(lastName)) {
//     //     showToast('Enter only alphabets!')
//     // }
    else if (email === '') {
      showToast('email is required.');
    } else if (!validateUserEmail(email)) {
      showToast('Enter Valid Email!');
    }
    // else if (phoneno === ""){
//     //     showToast("Phone no is required.")
//     // }
//     // else if (phoneno.length < 11) {
//     //     showToast('Mobile Number is not Valid!')
//     // }
    else if (password === '') {
      showToast('Password is required.');
    } else if (password.length < 8) {
      showToast('Password should be at least 8 characters ');
    } else if (ConfirmationPassword === '') {
      showToast('Confirm Password is required.');
    } else if (ConfirmationPassword !== password) {
      showToast('Password does not Matched!');
    } else {
      showToast(' your data is registered.');
    }
  };

  return (
    <View>
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
                <Text style={{fontSize:16,}}>Enter your Details to Register</Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Your Name </Text>
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={15}
                    placeholder={'Enter your name'}
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Your E-mail </Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Password </Text>
                  
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={20}
                    secureTextEntry={true}
                    placeholder={'At least 8 characters'}
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}> Confirm Password </Text>
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={20}
                    placeholder={''}
                    secureTextEntry={true}
                    value={ConfirmationPassword}
                    onChangeText={text => setConfirmationPassword(text)}
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
                      //backgroundColor: '#f1c40f',
                    }}
                    onPress={() => {
                      btnAction();
                    }}
                      onPressIn={() => {
                        postUser();
                      }}
                   >
                    <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.signIn}>
                      <Text style={styles.textSign}> Submit </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View> 

                <View>
                  <Text style={{color: '#000',fontSize:16,lineHeight:23,}}>
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
                  <View>
                    <Text style={{color: '#000',fontSize:17}}>
                      Already have an account ?
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity 
                    //onPress={()=>navigation.navigate('LogIn')}
                    
                    >
                      <Text style={{color: 'blue',fontSize:18,fontWeight:"500",}}> Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
    </View>
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
    fontWeight: '700',
    color: 'black',
    paddingBottom: 5,
    lineHeight: 25,
    fontSize: 16,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    fontSize:16,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 20,
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
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});

export default Register
