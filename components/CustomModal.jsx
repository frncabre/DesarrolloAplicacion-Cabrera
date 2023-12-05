import { View, Text, Modal, StyleSheet, Button } from 'react-native'

const CustomModal =  ({
    modalVisible,
    itemSelected,
    onDeleteItemHanlder,
    setModalVisible

}) => {
    return (
        <Modal animationType='slide' visible={modalVisible} >
            <View style={styles.modalMessageContainer}>
                <Text> Se eliminara: </Text>
                <Text> {itemSelected.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title='Cancelar' color='#FF2727' onPress={() => setModalVisible(!modalVisible)}></Button>
                <Button title='Dale' onPress={() => onDeleteItemHanlder()}></Button>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalMessageContainer: {
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalButtonContainer: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})