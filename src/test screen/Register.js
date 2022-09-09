import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Register = ({navigation}) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [ConfirmationPassword, setConfirmationPassword] = useState(null);

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
  console.log("POST USER",postUser)
  return (
    <View>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={{marginBottom: 50}}>
            <View style={{margin: 20, alignItems: 'center'}}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  fontSize: 25,
                  fontWeight: '700',
                }}>
                Form Validation{' '}
              </Text>
            </View>

            <View>
              <Text
                style={{marginHorizontal: 15, fontSize: 20, fontWeight: '500'}}>
                {' '}
                Name:
              </Text>
              <TextInput
                placeholder="First Name"
                value={name}
                onChangeText={text => setName(text)}
              
                style={{
                  marginHorizontal: 15,
                  marginVertical: 10,
                  borderColor: 'black',
                  borderWidth: 1,
                  width: '90%',
                  borderRadius: 10,
                }}
              />

              <Text
                style={{marginHorizontal: 15, fontSize: 20, fontWeight: '500'}}>
                {' '}
                Email:
              </Text>
              <TextInput
                placeholder="Email Address"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{
                  marginHorizontal: 15,
                  marginVertical: 10,
                  borderColor: 'black',
                  borderWidth: 1,
                  width: '90%',
                  borderRadius: 10,
                }}
              />

              <Text
                style={{marginHorizontal: 15, fontSize: 20, fontWeight: '500'}}>
                {' '}
                Password:
              </Text>
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                style={{
                  marginHorizontal: 15,
                  marginVertical: 10,
                  borderColor: 'black',
                  borderWidth: 1,
                  width: '90%',
                  borderRadius: 10,
                }}
              />

              <Text
                style={{marginHorizontal: 15, fontSize: 20, fontWeight: '500'}}>
                {' '}
                Confirm Password:
              </Text>
              <TextInput
                placeholder="Confirm Password"
                value={ConfirmationPassword}
                secureTextEntry={true}
                onChangeText={text => setConfirmationPassword(text)}
                style={{
                  marginHorizontal: 15,
                  marginVertical: 10,
                  borderColor: 'black',
                  borderWidth: 1,
                  width: '90%',
                  borderRadius: 10,
                }}
              />
            </View>

            <View style={{alignItems: 'center', marginTop: 20}}>
              <TouchableOpacity
                style={{
                  margin: 30,
                  borderRadius: 10,
                  backgroundColor: 'skyblue',
                  width: '70%',
                  height: '25%',
                }}
                onPress={() => {
                  postUser();
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 15,
                    fontSize: 20,
                    fontWeight: '600',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;
