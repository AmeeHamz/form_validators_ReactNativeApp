// import { View, Text, FlatList, TouchableOpacity } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import ModalView from "../src/components/ModalView"

// const Home = (props) => {
//     const [data, setData] = useState()
//     const [isLoaded, setisLoaded] = useState(true)
//     // const [id, setId] = useState()

//     const getProductData = async () => {
//         try {
//             const response = await fetch('https://cybexo.dev/cybexo360_0/api/products')
//             const product = await response.json()
//             const productID = product
//             setData(product)
//             console.log("PRODUCT ID",productID)
//             setisLoaded(false)
//             // console.log('.....//////', product)
//         } catch (error) {
//             console.log('////', error)
//         }
//     }
//     useEffect(() => {
//         getProductData();
//     }, [])

//     // const deleteProduct = async () => {
//     //     try {
//     //         const response = await fetch(`https://cybexo.dev/cybexo360_0/api/products/${id}`)
//     //         const product = await response.json()
//     //         setData(product)
//     //         setisLoaded(false)
//     //         // console.log('.....//////', product)
//     //     } catch (error) {
//     //         console.log('////', error)
//     //     }
//     // }

//     return (
//         <View style={{ alignItems: 'center', }}>
//             <View>
//                 <Text style={{ fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 20 }}>Products</Text>
//             </View>
//             <View style={{ width: "80%", height: 300, marginTop: 60 }}>
//                 <FlatList

//                     data={data}
//                     renderItem={({ item }) => {
//                         return (
//                             <View style={{ marginTop: 30, borderRadius: 10, backgroundColor: "skyblue" }}>
//                                 <View style={{margin:15}}>
//                                     <Text style={{ fontSize: 20, fontWeight: '600' }}>Name: {item.name}</Text>
//                                     <Text style={{ fontSize: 15, fontWeight: '600', textDecorationLine: 'underline' }}>Description: {item.description}</Text>
//                                     <Text style={{ fontSize: 15, fontWeight: '600', textDecorationLine: 'underline' }}>Price: {item.price}</Text>
//                                     <Text style={{ fontSize: 15, fontWeight: '600', textDecorationLine: 'underline' }}>Id: {item.id}</Text>
//                                     <TouchableOpacity style={{ backgroundColor: "grey", margin: 5, marginLeft: 55, marginRight: 55, borderRadius: 10 }}>
//                                         <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: "700" }}>AddProduct</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         )
//                     }}
//                 />
//             </View>
//             <View style={{ height: 750, width: 300 }}>
//                 <ModalView loginToken={props.Token} />
//             </View>

//         </View>
         
//     )
                 

// export default Home