import React, {useEffect} from 'react';

import { StyleSheet, Text, View } from 'react-native';


const Home = () => {

  const getUserData = async () => {
    try {
    const response = await fetch(
     'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json'
     );
     const myData = await response.json(); 
     console.log(myData);
    } catch (error){
     console.log(error);
   
    }
   }; 
   
   useEffect(() => {
     getUserData ();
   }, []);
   



  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};



const styles = StyleSheet.create({

});

export default Home;