import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { GetToken } from '../apiCall/ApiCall'

const ModalView = (props) => {
    const statee = props.loginToken
    // console.log('Token aya:::', statee)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(null)
    const [slug, setSlug] = useState(null)
    const [price, setPrice] = useState(null)

    const AddProduct = async () => {
        let bodyData = new FormData();
        bodyData.append("name", name)
        bodyData.append("slug", slug)
        bodyData.append("price", price)
        console.log('data  >>><<<<', bodyData)
        const Token = await GetToken()
        console.log("GET TOKEN  ",Token)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Authorization": `Bearer ${Token}`,
            },
            body: bodyData
        };

          console.log("REQUEST OPTION", requestOptions)
        try {
            const response = await fetch('https://cybexo.dev/cybexo360_0/api/products', requestOptions)
            const data = await response.json()
            console.log('..........', data)
        } catch (error) {
            console.log('?ERROR //////////   ', JSON.stringify(error))
        }

    }

    return (
        <View style={{ height: "100%", marginTop: 40, flex: 1, alignItems: "center" }}>
            <TouchableOpacity style={{ height: '7%', width: '60%', backgroundColor: "skyblue", borderRadius: 15 }}
                onPress={() => { setShowModal(true) }}
            >
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20, fontWeight: '600' }}>Add Products</Text>
            </TouchableOpacity>
            <Modal visible={showModal} transparent={true}>
                <ScrollView>
                    <View style={{ backgroundColor: "#000000aa", height: 300, marginTop: 300 }}>
                        <View style={{ margin: 5, backgroundColor: "#ffffff", flex: 1, borderRadius: 8, padding: 50 }}>
                            <Text style={{ marginTop: -40, fontWeight: '600' }}>  Name:</Text>
                            <TextInput
                                placeholder='Enter Product Name'
                                style={{ borderColor: 'black', borderWidth: 1, height: 40, marginTop: 5, borderRadius: 10 }}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                            <Text style={{ marginTop: 10, fontWeight: '600' }}>  Slug:</Text>
                            <TextInput
                                placeholder='Enter Product Slug'
                                style={{ borderColor: 'black', borderWidth: 1, height: 40, marginTop: 5, borderRadius: 10 }}
                                value={slug}
                                onChangeText={(text) => setSlug(text)}
                            />
                            <Text style={{ marginTop: 10, fontWeight: '600' }}>  Price:</Text>
                            <TextInput
                                placeholder='Enter Product Price'
                                style={{ borderColor: 'black', borderWidth: 1, height: 40, marginTop: 5, borderRadius: 10 }}
                                value={price}
                                onChangeText={(text) => setPrice(text)}
                            />
                            <TouchableOpacity style={{ alignItems: 'center', marginTop: 25, backgroundColor: "skyblue", borderRadius: 10, width: "40%", marginLeft: 75 }}
                                onPress={() => {
                                    setShowModal(false)
                                    AddProduct()
                                }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}

export default ModalView