import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Constants from './src/constants.js'

class App extends Component {
  state = {
    page: Constants.WORKOUTPAGE,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>You're current on page number: {this.state.page} </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;