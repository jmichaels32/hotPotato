import React, { useState, useEffect, useReducer } from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import {
  useFonts,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

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
      <TouchableOpacity onPress={() => props.workoutForm(Const.RECOMMENDERPAGE)}>
        <Image style={{width: 40, height: 40}} source={Const.activityPlusPath}/>
      </TouchableOpacity>
    </View>
  )
};

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
  });

  const [currentPage, setPage] = useState(Const.WORKOUTPAGE);

  const updatePage = (page) => {
    setPage(page);
  }

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={Styles.appStyles.container}>
      <TopBar workoutForm={updatePage}/>
      <Pages currentPage={currentPage}/>
      <View style={Styles.appStyles.navbar}>
        <TouchableOpacity onPress={() => updatePage(Const.WORKOUTPAGE)}>
          <Image style={Styles.appStyles.icons} source={currentPage == Const.WORKOUTPAGE ? Const.selectedWorkoutIconPath : Const.workoutIconPath}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updatePage(Const.FORTRESSPAGE)}>
          <Image style={Styles.appStyles.icons} source={currentPage == Const.FORTRESSPAGE ? Const.selectedFortressIconPath : Const.fortressIconPath}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updatePage(Const.BATTLEPAGE)}>
          <Image style={Styles.appStyles.icons} source={currentPage == Const.BATTLEPAGE ? Const.selectedBattleIconPath : Const.battleIconPath}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updatePage(Const.PROFILEPAGE)}>
          <Image style={Styles.appStyles.icons} source={currentPage == Const.PROFILEPAGE ? Const.selectedProfileIconPath : Const.profileIconPath}/>
        </TouchableOpacity>
      </View> 
      <StatusBar style="auto" />
    </View>
  );
}