import React, { useState } from 'react';
import { View } from 'react-native';

// Local file import
import * as Const from './constants.js';
import * as Styles from './styles.js';
import RecommenderPage from './pageFiles/recommenderPage.js';
import FortressPage from './pageFiles/fortressPage.js';
import BattlePage from './pageFiles/battlePage.js';
import ProfilePage from './pageFiles/profilePage.js';
import WorkoutPage from './pageFiles/workoutPage.js';
import RegimenPage from './pageFiles/regimenPage.js';
import WorkoutPreferencesPage from './pageFiles/workoutpreferencesPage.js';
import MyGoalsPage from './pageFiles/mygoalsPage.js'

const Pages = (props) => {
    const [generateWorkoutFromRequestOutput, generateWorkoutFromRequestChange] = useState([])

    return (
        <View>
            {props.currentPage == Const.WORKOUTPAGE && <WorkoutPage />}
            {props.currentPage == Const.FORTRESSPAGE && <FortressPage />}
            {props.currentPage == Const.BATTLEPAGE && <BattlePage />}
            {props.currentPage == Const.PROFILEPAGE && <ProfilePage 
                                                            changePage={props.changePage}
                                                        />}
            {props.currentPage == Const.RECOMMENDERPAGE && <RecommenderPage 
                                                                changePage={props.changePage} 
                                                                changeGenerateWorkoutFromRequest={generateWorkoutFromRequestChange}
                                                            />}
            {props.currentPage == Const.REGIMENPAGE && <RegimenPage 
                                                                generateWorkoutFromRequest={generateWorkoutFromRequestOutput}
                                                            />}
            {props.currentPage == Const.WORKOUTPREFERENCESPAGE && <WorkoutPreferencesPage />}
            {props.currentPage == Const.MYGOALSPAGE && <MyGoalsPage />}
        </View>
    );
};

export default Pages;