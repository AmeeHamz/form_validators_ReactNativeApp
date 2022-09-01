import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,

} from 'react-native';

const Register = () => {
  const [fullName, setfullName] = useState('');
  const [emailAddres, setemailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const saveUser = () =>
    const response = await fetch(
    // 'https://cybexo.dev/cybexo360_0/api/register'
     );
     const myData = await response.json(); 
     console.log(myData);
     catch (error){
     console.log(error);
   
    }
   }; 
   
  return (
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
                  <Text style={styles.labels}>Full Name </Text>
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={15}
                    placeholder={'Enter your full name'}
                    value={fullName}
                    onChangeText={text => setfullName(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Your E-mail </Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                   // value={emailAddres}
                    onChangeText={text => setemailAddress(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Password </Text>
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={20}
                    placeholder={'At least 8 characters'}
                  //  value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.labels}> Confirm Password </Text>
                  <TextInput
                    style={styles.inputStyle}
                    maxLength={20}
                    placeholder={''}
                 //   value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
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
                    }}>
                    
                      <Text style={styles.textSign}> Submit </Text>
                
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
                    <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                      <Text style={{color: 'blue',fontSize:18,fontWeight:"500",}}> Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
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

export default Register;
