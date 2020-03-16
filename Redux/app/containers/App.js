// // App.js

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   ToastAndroid,
// } from 'react-native';
// import ListItem from '../components/ListItem';

// export default class App extends Component {
//   state = {
//     placeName: null,
//     // places: [],
//   };

//   // placeSubmitHandler = () => {
//   //   if (this.state.placeName.trim() === '') {
//   //     return;
//   //   }
//   //   this.setState(prevState => {
//   //     return {
//   //       places: prevState.places.concat({
//   //         key: Math.random(),
//   //         value: prevState.placeName,
//   //       }),
//   //     };
//   //   });
//   //   this.setState({
//   //     placeName: '',
//   //   });
//   // };

//   placeNameChangeHandler = value => {
//     this.setState({
//       placeName: value,
//     });
//   };

//   // placesOutput = () => {
//   //   return (
//   //     <FlatList
//   //       style={styles.listContainer}
//   //       data={this.state.places}
//   //       keyExtractor={(item, index) => index.toString()}
//   //       renderItem={info => (
//   //         <ListItem
//   //           placeName={info.item.value}
//   //           onItemPressed={() => this.onItemDeleted(info.item.key)}
//   //         />
//   //       )}
//   //     />
//   //   );
//   // };

//   // onItemDeleted = key => {
//   //   this.setState(prevState => {
//   //     return {
//   //       places: prevState.places.filter(place => {
//   //         return place.key !== key;
//   //       }),
//   //     };
//   //   });
//   //   ToastAndroid.show('Deleted !!!', ToastAndroid.SHORT);
//   // };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Seach Places"
//             style={styles.placeInput}
//             value={this.state.placeName}
//             onChangeText={this.placeNameChangeHandler}></TextInput>
//           <Button
//             title="Add"
//             style={styles.placeButton}
//             onPress={this.placeSubmitHandler}
//           />
//         </View>
//         {/* <View style={styles.listContainer}>{this.placesOutput()}</View> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//
//   placeInput: {
//     width: '70%',
//   },
//   placeButton: {
//     width: '30%',
//   },
//   listContainer: {
//     width: '100%',
//   },
// });

import React, {Component} from 'react';
import AppNavigator from '../navigation/AppNavigator';

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
