import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import * as React from 'react';
import { TextInput, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Comments2 extends React.Component {
  render() {
    return (
       <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Upload Image </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Upload Video </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButtonText:{
      color: 'white'
   },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 5,
      margin: 5,
      height: 40,
   },
  textAreaContainer: {
    marginTop: 20
  },
  textArea: {
    borderWidth: 1,
    height: 150,
    padding: 5,
    marginRight: 10,
    marginLeft: 10
  }
})