import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';



const AddModal = ({ visible, onSubmit, onCancel,state }) => {
    const [price, setPrice] = useState(state);
    const [amount, setAmount] = useState('');
    const [businessType, setBusinessType] = useState('');



    return (
        <View style={styles.container}>
            <Modal visible={visible}>
                <View style={styles.modalview}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput 
                    style={styles.input} 
                    value={price} 
                    onChangeText={(text) => setPrice(text)} 
                    />

                    <Text style={styles.label}>Amount:</Text>
                    <TextInput 
                    style={styles.input} 
                    value={amount} 
                    onChangeText={(text) => setAmount(text)} 
                    />

                    <Text style={styles.label}>Business Type:</Text>

                    <View style={styles.pickerInput}>
                        <Picker
                            selectedValue={businessType}
                            onValueChange={itemValue => setBusinessType(itemValue)}
                            dropdownIconColor="gray"
                            style={{ color: "gray" }}
                        >
                            <Picker.Item label="Type 1" value="type1" />
                            <Picker.Item label="Type 2" value="type2" />
                            <Picker.Item label="Type 3" value="type3" />
                        </Picker>
                    </View>

                    <View style={{flexDirection: "row",marginTop:10,justifyContent:"flex-end" }}>
                        <View style={{marginRight: 10}}>
                            <Button color="#47b2e4" title="Save" onPress={() => onSubmit({ price, amount, businessType })} />
                        </View>
                        <Button color="#47b2e4" title="Cancel" onPress={onCancel} />
                    </View>



                </View>
            </Modal>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalview: {
        borderColor: 'gray',
        borderWidth: 2,
        // height: 300,
        padding: 10,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: "#333333",
        fontFamily: "Jost-Regular"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        width: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#FFFFFF',
        color: "#495057",
        borderWidth: 1,
        borderColor: '#ced4da',
        padding: 10,
        borderRadius: 5
    },
    pickerInput: {
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 90,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default AddModal;
