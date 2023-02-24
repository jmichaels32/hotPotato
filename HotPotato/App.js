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
          <Button onPress={() => this.setState({currentPage : Const.WORKOUTPAGE})} title="Workout" color="#D6AE60"/>
          <Button onPress={() => this.setState({currentPage : Const.FORTRESSPAGE})} title="Fortress" color="#D6AE60"/>
          <Button onPress={() => this.setState({currentPage : Const.BATTLEPAGE})} title="Battle" color="#D6AE60"/>
          <Button onPress={() => this.setState({currentPage : Const.PROFILEPAGE})} title="Profile" color="#D6AE60"/>
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
    backgroundColor: '#FDDC9B',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    left: '2%',
    bottom: -20,
    height: 100,
    width: '96%',
    marginBottom: 20,
    paddingBottom: 25,
    borderRadius: 5,
  }
});

export default App;