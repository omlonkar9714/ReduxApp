import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import {connect} from 'react-redux';
import {deletePlace} from '../redux/actions/place';

class DataItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> DataItems </Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('ViewData');
          }}
          title="go to view item"></Button>
        <FlatList
          style={{height: '100%', width: '100%'}}
          data={this.props.places}
          keyExtractor={(item, index) => index.toString()}
          renderItem={data => (
            //  console.log(JSON.stringify(data))
            <View style={{padding: 10}}>
              <Text
                onPress={() => this.props.delete(data.item.key)}
                style={{fontSize: 30}}>
                {data.item.value}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{backgroundColor: '#ccc', height: 1}}></View>
          )}
        />
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

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
  return {
    places: state.placesReducer.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deletePlace(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataItems);
