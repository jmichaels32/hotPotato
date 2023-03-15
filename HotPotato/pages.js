import { Component } from 'react';
import { Text, View } from 'react-native';

// Local file import
import * as Const from './constants.js';
import * as Styles from './styles.js';
import RecommenderPage from './pageFiles/recommenderPage.js';
import FortressPage from './pageFiles/fortressPage.js';
import BattlePage from './pageFiles/battlePage.js';
import ProfilePage from './pageFiles/profilePage.js';
import WorkoutPage from './pageFiles/workoutPage.js';
import RegimenPage from './pageFiles/regimenPage.js';
import WorkoutPreferencesPage from './pageFiles/workoutpreferencespage.js';

const Pages = (props) => {
    return (
        <View>
            {props.currentPage == Const.WORKOUTPAGE && <WorkoutPage />}
            {props.currentPage == Const.FORTRESSPAGE && <FortressPage />}
            {props.currentPage == Const.BATTLEPAGE && <BattlePage />}
            {props.currentPage == Const.PROFILEPAGE && <ProfilePage />}
            {props.currentPage == Const.RECOMMENDERPAGE && <RecommenderPage changePage={props.changePage}/>}
            {props.currentPage == Const.REGIMENPAGE && <RegimenPage />}
            {props.currentPage == Const.WORKOUTPREFERENCESPAGE && <WorkoutPreferencesPage />}
        </View>
    );
};

export default Pages;