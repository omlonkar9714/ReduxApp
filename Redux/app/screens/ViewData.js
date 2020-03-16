import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class ViewData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> ViewData </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('UpdateData');
          }}
          title="go to update item"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewData;
