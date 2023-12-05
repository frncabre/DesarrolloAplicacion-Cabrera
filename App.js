import { Button, StyleSheet, TextInput, View, Text, FlatList, Modal } from 'react-native';
import { useState } from 'react';
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }
  const addItemToList = () => {
    if(textItem.trim() !== ''){
      setItemList(prevItemList => [...prevItemList, { id: Math.random().toString(), value: textItem }])
      setTextItem('')
    }
    
  }

  const renderListItem = ({ item }) => {
    return (
      <View style={styles.itemList}>
        <Text>
          - {item.value}
        </Text>
        <Button title='X' onPress={() => onSelectItemHandler(item.id)} />
      </View>
    )
  }

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemSelected(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHanlder = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelected.id))
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <CustomModal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onDeleteItemHanlder={onDeleteItemHanlder}
        setModalVisible={setModalVisible}
      />
      <View style={styles.container}>
        <CustomInput
          onChangeTextHandler={onChangeTextHandler}
          textItem={textItem}
          addItemToList={addItemToList}
        />
        <View>
          <FlatList
            data={itemList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFECF8',
    paddingTop: 50
  },
  text: {
    width: 200,
    paddingBottom: 10,
    textAlign: 'center'
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFC9EB',
    borderRadius: 15
  }
});
