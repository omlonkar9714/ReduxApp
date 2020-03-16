// ListItem.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const MyTextInput = props => {
  return (
    <TextInput
      value={props.value}
      style={styles.inputView}
      placeholder={props.holder}
      onChangeText={props.onChangeText}></TextInput>
  );
};

const styles = StyleSheet.create({
  inputView: {
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    fontSize: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
});

export default MyTextInput;
