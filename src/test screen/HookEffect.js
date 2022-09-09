// import React, {useEffect,useState} from "react";
// import {View,Text,StyleSheet, FlatList,SafeAreaView, ScrollView} from "react-native";

// const HookEffect = () => {
//     const [myUserData, setMyUserData] = useState();
//     const[isLoaded, setIsLoaded] = useState(true);

//     const getUserData = async () => {
//         try {
//         const response = await fetch(
//          "https://cybexo.dev/cybexo360_0/api/products"
//          );
//          const myData = await response.json(); 
//          setMyUserData(myData);
//          setIsLoaded(false);
//          console.log(myData);
//         } catch (error) {
//          console.log(error);
       
//         }
//        }; 
       
//        useEffect(() => {
//          getUserData ();
//        }, []);

//  return (

//    <View style={styles.mainContainer} >
//    <Text style={styles.h1}>List of Products</Text>
//    <FlatList 
//        data={myUserData}
//        renderItem={({item}) => {
//         return (
//             <View  > 
//             <Text style={styles.myname}>{item.name}</Text>
//              <Text style={styles.myname}>{item.description}</Text>
//             <Text style={styles.myname}>{item.price}</Text> 
//             </View>
//         )
//        }}
//    />
   
//    </View>
//  );
// };
// const styles = StyleSheet.create({
//     mainContainer: {
//        width: "100%",
//        paddingTop: 50,
//        display: "flex",
//        justifyContent: "center",
//       alignItem: "center",
//       textAlign:"center",
//     },
//    h1: {
//       fontSize: 20,
//       textAlign: "center"
//     },
//     myname: {
        
//       textAlign: "center"

//     }
// });

// export default HookEffect;