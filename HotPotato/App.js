import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

// Local file import
import Pages from './pages.js';
import * as Const from './constants.js';

const TopBar = (props) => {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <Image style={{width: 30, height: 30, marginBottom: 5, marginLeft: 13}} source={Const.backButtonPath}/>
      </TouchableOpacity>
      <Image style={{width: '29%', height: '35.1%'}} source={Const.logoPath} />
      <TouchableOpacity>
        <Image style={{width: 40, height: 40}} source={Const.activityPlusPath}/>
      </TouchableOpacity>
    </View>
  )
}

class App extends Component {
  state = {
    currentPage : Const.WORKOUTPAGE,
  };

  render() {
    return (
      <View style={styles.container}>
        <TopBar />
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
  container: {
    flex: 1,
    backgroundColor: '#D6AE60',
    justifyContent: 'center',
  }, 
  topbar: {
    backgroundColor: '#FDDC9B',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '12.5%',
    paddingBottom: 3,
  },
  icons: {
    resizeMode: 'contain',
    height: 65,
    width: 65,
  },
  navbar: {
    display: 'flex',
    backgroundColor: '#FDDC9B',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: -30,
    height: '12.5%',
    marginBottom: 20,
    paddingBottom: 25,
    
    // To make the navbar like the figma
    //left: '2%',
    //width: '96%',
    //borderRadius: 5,

    // An alternate design
    width: '100%',
  }
});

export default App;