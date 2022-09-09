// import React, {useState, useEffect} from 'react';
// import {
//   TextInput,
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Hometest = () => {
//   const [inputBoxValue, setInputBoxValue] = useState('');
//   const [storageDataList, setStorageDataList] = useState([]);

//   useEffect(() => {
//     async function tempFunction() {
//       await getItemList();
//     }
//     tempFunction();

//     return () => {};
//   }, []);

//   const addItemToList = async () => {
//     try {
//       storageDataList.push(inputBoxValue);

//       const output = JSON.stringify(storageDataList);

//       //console.log(output);
//       await AsyncStorage.setItem('itemList', output);
//       setInputBoxValue('');

//       // await getItemList();
//       alert('Data is Stored');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getItemList = async () => {
//     try {
//       const data = await AsyncStorage.getItem('itemList');
//       const output = JSON.parse(data);

//       setStorageDataList(output);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.inputBox}
//         placeholder={'add items'}
//         value={inputBoxValue}
//         onChangeText={value => setInputBoxValue(value)}
//       />

//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => addItemToList()}>
//         <Text style={styles.textColor}>Add</Text>
//       </TouchableOpacity>
//       <View style={styles.list}>
//         <Text style={{fontSize: 20, fontWeight:'bold', marginBottom: 30}}>Array List</Text>
//         {storageDataList.map((item, index) => {
//           // console.log(item);
//           return(
// <Text style={{marginVertical:10}} key={index}>{item}</Text>
//           ) 
//         })}
//       </View>
//     </View>
//   );
// };

// const {width} = Dimensions.get('screen');
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inputBox: {
//     borderWidth: 2,
//     borderColor: 'black',
//     marginVertical: 10,
//     marginHorizontal: 8,
//   },
//   addButton: {
//     width: width - 20,
//     backgroundColor: '#0099ff',
//     marginHorizontal: 10,
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 5,
//   },
//   textColor: {
//     fontWeight: '700',
//     fontSize: 18,
//     color: 'white',
//   },
//   list: {
//     flex: 1,
    
//     justifyContent: 'center',
//     alignItems:'center',
//   },
// });
// export default Hometest;
