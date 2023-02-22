import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';

// Local file import
import Pages from './pages.js';
import * as Const from './constants.js';

class App extends Component {
  state = {
    currentPage: Const.WORKOUTPAGE,
  };

  render() {
    return (
      <View style={styles.container}>
        <Pages currentPage={this.state.currentPage}/>
        <View style={styles.navbar}>
          <Button onPress={() => this.setState({currentPage : Const.WORKOUTPAGE})} title="Workout"/>
          <Button onPress={() => this.setState({currentPage : Const.FORTRESSPAGE})} title="Fortress"/>
          <Button onPress={() => this.setState({currentPage : Const.BATTLEPAGE})} title="Battle"/>
          <Button onPress={() => this.setState({currentPage : Const.PROFILEPAGE})} title="Profile"/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6AE60',
    justifyContent: 'center',
  }, 
  navbar: {
    display: 'flex',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    height: 80,
    width: '100%',
    marginBottom: 20,
  }
});

export default App;