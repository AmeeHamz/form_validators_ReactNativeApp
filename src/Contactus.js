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

const Contactus = () => {
  return (
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
              <Text style={styles.mainHeader}>Create account </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Your first name </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Enter your first name'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Your last name </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Enter your last name'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Phone number </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Enter your mobile number'}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.labels}>Your last name </Text>
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Enter your last name'}
                />
              </View>

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
                    backgroundColor: '#f1c40f',
                  }}>
                  <Text style={styles.buttonText}> Submit </Text>
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
                  
                    <Text style={{color: '#00f', flexDirection: 'row'}}> Sign-In</Text>
        
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

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

export default Contactus;
