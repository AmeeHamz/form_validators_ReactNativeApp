import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StatusBar,
    alert,
} from 'react-native';
//import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import FontAwesome from 'react-native-vactor'

const LogIn = ({navigation}) => {
 
  const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [Token, setToken] = useState(null)

    useEffect(()=>{
        // EmptyFunc()
    },[])
    
// const EmptyFunc = async () => {
//     await emptyToken()
// }

const postUser = async () => {
  let bodyData = new FormData();
  bodyData.append("email", email)
  bodyData.append("password", password)
  console.log('data  >>><<<<', bodyData)

  const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: bodyData
  };

  try {
      const response = await fetch('https://cybexo.dev/cybexo360_0/api/login', requestOptions)
      const data = await response.json()
      if(data.token){
          alert("login successfully...")
          await SetToken(data.token)
          
          
          navigation.navigate(screenNames.Home)
          
      }
      else {
        alert("please Enter the valid credentials...")
    }

} catch (error) {
    console.log('//////////', JSON.stringify(error))
}

}

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
                height: '100%',
                padding: 20,
              }}>
              <View style={styles.mainContainer}>
                <Text style={styles.mainHeader}>Welcome! </Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Your E-mail </Text>
                  <TextInput
                   value={email}
                   onChangeText={(text) => setEmail(text)}
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                  />
                </View>
  
                <View style={styles.inputContainer}>
                  <Text style={styles.labels}>Password </Text>
                  <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                    style={styles.inputStyle}
                    placeholder={'At least 8 characters'}
                  />
                </View>

                
  
                {/* LogIn button  */}
                <View>
                <TouchableOpacity
                    style={{
                      alignItems: 'center',
                     // padding: 10,
                      marginTop: 10,
                      borderRadius: 25,
                      //backgroundColor: '#f1c40f',
                    }}
                    onPress={() => {
                      postUser()
                      //  navigation.navigate(screenNames.Home) 
                  }}

                  
                    >
                    <LinearGradient
                      colors={['#08d4c4', '#01ab9d']}
                      style={styles.buttonStyle}>
                      <Text style={styles.textSign} > Login </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                {/* Forgot password  */}
                <View>
                <Text style={{
                  textAlign:'center',
                  fontSize:15,
                  marginTop: 20,
                  marginBottom: 20,
                  color:"red",
                  fontWeight:"400",
                }}>Forgot password?</Text>
                </View>
                {/* sign in google and facebook account button  */}
                <View>
                <TouchableOpacity>
                
              
                </TouchableOpacity>
                </View>

           
                <View style={{flexDirection: 'row' , }}>
                  <Text style={{color: '#000', fontSize:17,}}>
                  Don't have an account?
                  <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                      <Text style={{color: '#00f',}}> Sign-Up</Text>
                 </TouchableOpacity>
                 </View>
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
      width: 300,
      height: 50,
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    textSign: {
      color: 'white',
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
  