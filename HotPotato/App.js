import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from "react";
import { setCustomText } from 'react-native-global-props';
import { TouchableOpacity, Image, Text, View } from 'react-native';

// Local file import
import Pages from './pages.js';
import * as Styles from './styles.js';
import * as Const from './constants.js';
import { WorkoutIcon, FortressIcon, BattleIcon, ProfileIcon, 
         WorkoutIconSelected, FortressIconSelected, BattleIconSelected, ProfileIconSelected, 
         ActivityPlus, LogoLight, LogoDark, BackButton, AmmoIcon } from './constants.js'

const TopBar = (props) => {
  const buttonStyle = props.state.displayBackButton ? Styles.displayStyles.show : Styles.displayStyles.hide;

  const goBack = () => {
    const pageChange = props.state.previousPage.pop();
    if (props.state.previousPage.length == 0) {
      props.onPress(null, pageChange)
    } else {
      props.onPress(props.state.previousPage, pageChange)
    }
  };

  return (
    <View style={Styles.appStyles.topbar}>
      <TouchableOpacity style={buttonStyle} onPress={goBack}>
        <BackButton width={40} height={40} />
      </TouchableOpacity>
      <LogoLight height={40} />
      {props.state.currentPage == Const.WORKOUTPAGE 
      ? <TouchableOpacity onPress={() => props.onPress(Const.WORKOUTPAGE, Const.RECOMMENDERPAGE)}>
          <ActivityPlus width={50} height={50} style={Styles.displayStyles.show}/> 
        </TouchableOpacity>
      : 
      props.state.currentPage == Const.BATTLEPAGE
      ? <TouchableOpacity>
          <AmmoIcon width={60} height={60} style={Styles.displayStyles.show}/> 
        </TouchableOpacity>
      : <ActivityPlus width={50} height={50} style={Styles.displayStyles.hide}/>
      }
      
    </View>
  )
};

const customTextProps = {
  style: {
    fontFamily: 'Nunito-Reg',
    color: '#443105'
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
    // By storing as an array we're able to remember all previous pages allowing for nested pages (and working back button)
    previousPage : [],
    displayBackButton : !Const.DISPLAY, 
    fontsLoaded : false,
  }

  setPage(prevPage, page) {
    // If we're not dealing with a home/the origin page
    if (prevPage != null) {
      this.setState({currentPage : page,
                     previousPage : [...this.state.previousPage, prevPage],
                     displayBackButton : Const.DISPLAY})
    } else {
      this.setState({currentPage : page,
                     previousPage : this.state.previousPage,
                     displayBackButton : !Const.DISPLAY})
    }
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
        <TopBar state={this.state} onPress={this.setPage}/>
        <Pages currentPage={this.state.currentPage}/>
        <View style={Styles.appStyles.navbar}>
          <TouchableOpacity onPress={() => this.setPage(null, Const.WORKOUTPAGE)}>
            {this.state.currentPage == Const.WORKOUTPAGE ? <WorkoutIconSelected /> : <WorkoutIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(null, Const.FORTRESSPAGE)}>
            {this.state.currentPage == Const.FORTRESSPAGE ? <FortressIconSelected /> : <FortressIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(null, Const.BATTLEPAGE)}>
            {this.state.currentPage == Const.BATTLEPAGE ? <BattleIconSelected /> : <BattleIcon />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setPage(null, Const.PROFILEPAGE)}>
            {this.state.currentPage == Const.PROFILEPAGE ? <ProfileIconSelected /> : <ProfileIcon />}
          </TouchableOpacity>
        </View> 
        <StatusBar style="auto" />
      </View>
    ); 
  }
}

export default App;
