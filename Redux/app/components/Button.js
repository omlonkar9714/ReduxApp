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
    <Text
      style={[styles.inputView, props.style]}
      placeholder={props.holder}
      onPress={props.onPress}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  inputView: {
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    width: '100%',
  },
});

export default MyTextInput;
