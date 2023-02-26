import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, Text, View } from 'react-native';

// Local file import
import Pages from './pages.js';
import * as Const from './constants.js';
import * as Styles from './styles.js';

const TopBar = (props) => {
  return (
    <View style={Styles.appStyles.topbar}>
      <TouchableOpacity>
        <Image style={{width: 30, height: 30, marginBottom: 5, marginLeft: 13}} source={Const.backButtonPath}/>
      </TouchableOpacity>
      <Image style={{width: '29%', height: '35.1%'}} source={Const.logoPath} />
      <TouchableOpacity onPress={() => props.onPress(Const.RECOMMENDERPAGE)}>
        <Image style={{width: 40, height: 40}} source={Const.activityPlusPath}/>
      </TouchableOpacity>
    </View>
  )
};

class App extends Component {
  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);
  }

  state = {
    currentPage : Const.WORKOUTPAGE,
  }

  updatePage(page) {
    this.setState({currentPage : page})
  }

  render() {
    return (
      <View style={Styles.appStyles.container}>
        <TopBar onPress={this.updatePage}/>
        <Pages currentPage={this.state.currentPage}/>
        <View style={Styles.appStyles.navbar}>
          <TouchableOpacity onPress={() => this.updatePage(Const.WORKOUTPAGE)}>
            <Image style={Styles.appStyles.icons} source={this.state.currentPage == Const.WORKOUTPAGE ? Const.selectedWorkoutIconPath : Const.workoutIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.updatePage(Const.FORTRESSPAGE)}>
            <Image style={Styles.appStyles.icons} source={this.state.currentPage == Const.FORTRESSPAGE ? Const.selectedFortressIconPath : Const.fortressIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.updatePage(Const.BATTLEPAGE)}>
            <Image style={Styles.appStyles.icons} source={this.state.currentPage == Const.BATTLEPAGE ? Const.selectedBattleIconPath : Const.battleIconPath}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.updatePage(Const.PROFILEPAGE)}>
            <Image style={Styles.appStyles.icons} source={this.state.currentPage == Const.PROFILEPAGE ? Const.selectedProfileIconPath : Const.profileIconPath}/>
          </TouchableOpacity>
        </View> 
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;