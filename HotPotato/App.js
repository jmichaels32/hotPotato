import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

// Local file import
import Pages from './pages.js';
import * as Const from './constants.js';

class App extends Component {
  state = {
    currentPage : Const.WORKOUTPAGE,
  };

  /*
  onPress(state) {
    this.setState()
  }*/

  render() {
    return (
      <View style={styles.container}>
        <Pages currentPage={this.state.currentPage}/>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => this.setState({currentPage : Const.WORKOUTPAGE})} title="Workout" color="#D6AE60">
            <Image style={styles.icons} source={this.state.currentPage == Const.WORKOUTPAGE ? Const.selectedWorkoutIconPath : Const.workoutIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentPage : Const.FORTRESSPAGE})} title="Fortress" color="#D6AE60">
            <Image style={styles.icons} source={this.state.currentPage == Const.FORTRESSPAGE ? Const.selectedFortressIconPath : Const.fortressIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentPage : Const.BATTLEPAGE})} title="Battle" color="#D6AE60">
            <Image style={styles.icons} source={this.state.currentPage == Const.BATTLEPAGE ? Const.selectedBattleIconPath : Const.battleIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentPage : Const.PROFILEPAGE})} title="Profile" color="#D6AE60">
            <Image style={styles.icons} source={this.state.currentPage == Const.PROFILEPAGE ? Const.selectedProfileIconPath : Const.profileIconPath}/>
          </TouchableOpacity>
        </View> 
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    resizeMode: 'contain',
    height: 65,
    width: 65,
  },
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
    bottom: -30,
    height: 110,
    width: '96%',
    marginBottom: 20,
    paddingBottom: 25,
    borderRadius: 5,
  }
});

export default App;