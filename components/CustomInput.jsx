import { View, TextInput, Button, StyleSheet } from 'react-native'

const CustomInput = (
  {
    onChangeTextHandler,
    textItem,
    addItemToList,
  }
) => {
  return (
    <View style={styles.inputContainer} >
      <TextInput
        style={styles.textInput}
        placeholder='Ingresar tarea'
        onChangeText={onChangeTextHandler}
        value={textItem}
      />
      <Button
        title='Agregar'
        color='#F78EE3'
        onPress={addItemToList}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textInput: {
    width: 200,
    borderBottomColor: '#F78EE3',
    borderBottomWidth: 1.8,
  }
})