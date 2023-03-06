import * as Font from 'expo-font';
import { Component } from "react";
import { StatusBar } from 'expo-status-bar';
import { setCustomText } from 'react-native-global-props';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import WorkoutIcon from './images/icons/workoutIcon.svg'
import FortressIcon from './images/icons/fortressIcon.svg'
import BattleIcon from './images/icons/battleIcon.svg'
import ProfileIcon from './images/icons/profileIcon.svg'
import WorkoutIconSelected from './images/selectedIcons/workoutIconSelected.svg'
import FortressIconSelected from './images/selectedIcons/fortressIconSelected.svg'
import BattleIconSelected from './images/selectedIcons/battleIconSelected.svg'
import ProfileIconSelected from './images/selectedIcons/profileIconSelected.svg'
import ActivityPlus from './images/topbar/activityPlus.svg'
import LogoLight from './images/topbar/logoLight.svg'
import LogoDark from './images/topbar/logoDark.svg'
import BackButton from './images/topbar/backButton.svg'

// Local file import
import Pages from './pages.js';
import * as Const from './constants.js';
import * as Styles from './styles.js';

const TopBar = (props) => {
  return (
    <View style={Styles.appStyles.topbar}>
      <TouchableOpacity>
        <BackButton width={40} height={40} />
      </TouchableOpacity>
      <LogoDark height={40} />
      <TouchableOpacity onPress={() => props.onPress(Const.RECOMMENDERPAGE)}>
        {props.currentPage == Const.WORKOUTPAGE ? <ActivityPlus width={50} height={50}/> : <View style="width: 50, height: 50" />}
      </TouchableOpacity>
    </View>
  )
};

const customTextProps = {
  style: {
    fontFamily: 'Nunito-Reg'

  }
};

setCustomText(customTextProps);

class App extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
  }

  state = {
    currentPage : Const.WORKOUTPAGE,
    fontsLoaded : false,
  }

  setPage(page) {
    this.setState({currentPage : page})
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      'Nunito-Light': require('./assets/fonts/Nunito/static/Nunito-Light.ttf'),
      'Nunito-Reg': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
      'Nunito-Bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf'),
      'Nunito-ExtraBold': require('./assets/fonts/Nunito/static/Nunito-ExtraBold.ttf'),
    });
    this.setState({fontsLoaded : true})
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <View style={Styles.appStyles.container}>
        <TopBar currentPage={this.state.currentPage} onPress={this.setPage}/>
        <Pages currentPage={this.state.currentPage}/>
        <View style={Styles.appStyles.navbar}>
          <TouchableOpacity onPress={() => this.setPage(Const.WORKOUTPAGE)}>
            {this.state.currentPage == Const.WORKOUTPAGE ? <WorkoutIconSelected /> : <WorkoutIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(Const.FORTRESSPAGE)}>
            {this.state.currentPage == Const.FORTRESSPAGE ? <FortressIconSelected /> : <FortressIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(Const.BATTLEPAGE)}>
            {this.state.currentPage == Const.BATTLEPAGE ? <BattleIconSelected /> : <BattleIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(Const.PROFILEPAGE)}>
            {this.state.currentPage == Const.PROFILEPAGE ? <ProfileIconSelected /> : <ProfileIcon />}
          </TouchableOpacity>
        </View> 
        <StatusBar style="auto" />
      </View>
    ); 
  }
}

export default App;
