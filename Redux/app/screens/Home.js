import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  ToastAndroid,
} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {addPlace} from '../redux/actions/place';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: '',
      spinAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 70,
              color: '#764abc',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}>
            Redux
          </Text>
          <View style={{height: 60}}>
            <Animated.Image
              style={{
                flex: 1,
                aspectRatio: 1.5,
                resizeMode: 'contain',
                transform: [{rotate: spin}],
              }}
              source={require('../assets/reduxlogo.png')}></Animated.Image>
          </View>
        </View>
        <View style={{marginTop: 20, width: 280, paddingHorizontal: 10}}>
          <TextInput
            value={this.state.placeName}
            holder="Enter location"
            onChangeText={text => {
              this.setState({placeName: text});
            }}></TextInput>
        </View>
        <View style={{marginTop: 20}}>
          <Button
            title="Submit"
            onPress={() => {
              ToastAndroid.show('Saved to store', ToastAndroid.SHORT);
              this.props.add(this.state.placeName);
              this.setState({placeName: ''});
            }}></Button>
        </View>
        <View style={{marginTop: 20}}>
          <Button
            style={{color: '#764abc'}}
            title="View Data"
            onPress={() => {
              this.props.navigation.navigate('DataItems');
            }}></Button>
        </View>
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
  return {
    places: state.placesReducer.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: place => dispatch(addPlace(place)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
