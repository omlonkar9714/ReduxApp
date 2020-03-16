// ListItem.js

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
      <TouchableOpacity onPress={props.onItemPressed}>
        <Image>
          style={{height: 10, width: 10}}
          source={require('../assets/edit.png')}>
        </Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});

export default ListItem;
