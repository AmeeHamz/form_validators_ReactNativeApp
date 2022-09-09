import { StyleSheet,TouchableOpacity, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'

const HomeAddProducts = () => {

    const [name,setName]=useState("")
    const [Slug,setSlug]=useState("")
    const [price,setPrice]=useState("")

const AddProduct = async () => {
    const formData=new  FormData();
    formData.append("name",name)
    formData.append("slug",Slug)
    formData.append("price",price)
    console.log('data  >>><<<<', formData)
    let result= await fetch()
}

  return (
    <View style={styles.mainContainerer}>
    <TouchableOpacity style={styles.tb1}>
        <Text style={styles.AddProduct}>Add Products</Text>
    </TouchableOpacity>
        <ScrollView>
            <View style={styles.View2}>
                <View style={styles.View3}>
                    <Text style={styles.text1 }>  Name:</Text>
                    <TextInput
                        placeholder='Enter Product Name'
                        style={styles.TextInput}
                       // value={name}
                       onChangeText={(text) => setName(text)}
                    />   
                    <Text style={styles.text1 }>  Slug:</Text>
                    <TextInput
                        placeholder='Enter Product Slug'
                        style={styles.TextInput}
                        //value={slug}
                       onChangeText={(text) => setSlug(text)}
                    />
                    <Text style={styles.text1 }>  Price:</Text>
                    <TextInput
                        placeholder='Enter Product Price'
                        style={styles.TextInput}
                       // value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                    <TouchableOpacity style={styles.tb2}
                         onPress={() => {
                        //     setShowModal(false)
                             AddProduct()
                        // }}
                        >
                        <Text style={styles.text1 }>Add Products</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
</View>
  )
}
const styles = StyleSheet.create({
    mainContainerer:{
        height: "100%", 
        marginTop: 40,
        flex: 1, 
        alignItems: "center"
    },
    tb1:{
        height: '7%', 
        width: '60%', 
        backgroundColor: "skyblue", 
        borderRadius: 15 ,
    },
    AddProduct:{
        textAlign: 'center', 
        marginTop: 10, 
        fontSize: 20, 
        fontWeight: '600'

    },
    AddProduct:{
         backgroundColor: "#000000aa", 
         height: 300, 
         marginTop: 300,

    },
    TextInput:{
         borderColor: 'black', 
         borderWidth: 1, 
         height: 40, 
         marginTop: 5, 
         borderRadius: 10 
    },
    tb2:{
        alignItems: 'center',
         marginTop: 25, 
         backgroundColor: "skyblue", 
         borderRadius: 10, 
         width: "40%", 
         marginLeft: 75 
    },
    text1:{
         marginTop: 10, 
         fontWeight: '600' 
    },
    View2:{
        backgroundColor: "#000000aa",
         height: 300, 
         marginTop: 300,
    },
    View3:{

    }
})
export default HomeAddProducts

