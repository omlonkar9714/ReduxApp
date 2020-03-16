import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> UpdateData </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
          title="go to Home"></Button>
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
export default UpdateData;
