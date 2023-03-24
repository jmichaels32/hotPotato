import React, { useState } from 'react';
import { View } from 'react-native';

// Local file import
import * as Const from './constants.js';
import * as Styles from './styles.js';
import RecommenderPage from './pageFiles/recommenderPage.js';
import FortressPage from './pageFiles/fortressPage.js';
import SoldierExterior from './pageFiles/fortress/soldierExterior.js';
import WizardExterior from './pageFiles/fortress/wizardExterior.js';
import KnightExterior from './pageFiles/fortress/knightExterior.js';
import SoldierInterior from './pageFiles/fortress/soldierInterior.js';
import WizardInterior from './pageFiles/fortress/wizardInterior.js';
import KnightInterior from './pageFiles/fortress/knightInterior.js';
import KingInterior from './pageFiles/fortress/kingInterior.js';
import CustomizePage from './pageFiles/fortress/customizePage.js';
import BattlePage from './pageFiles/battlePage.js';
import ProfilePage from './pageFiles/profilePage.js';
import WorkoutPage from './pageFiles/workoutPage.js';
import RegimenPage from './pageFiles/regimenPage.js';

const Pages = (props) => {
    const [generateWorkoutFromRequestOutput, generateWorkoutFromRequestChange] = useState([])

    return (
        <View>
            {props.currentPage == Const.WORKOUTPAGE && <WorkoutPage />}
            {props.currentPage == Const.FORTRESSPAGE && <FortressPage changePage={props.changePage} />}
            {props.currentPage == Const.SOLDIEREXTERIOR && <SoldierExterior changePage={props.changePage} />}
            {props.currentPage == Const.WIZARDEXTERIOR && <WizardExterior changePage={props.changePage} />}
            {props.currentPage == Const.KNIGHTEXTERIOR && <KnightExterior changePage={props.changePage} />}
            {props.currentPage == Const.SOLDIERINTERIOR && <SoldierInterior changePage={props.changePage} />}
            {props.currentPage == Const.WIZARDINTERIOR && <WizardInterior changePage={props.changePage} />}
            {props.currentPage == Const.KNIGHTINTERIOR && <KnightInterior changePage={props.changePage} />}
            {props.currentPage == Const.KINGINTERIOR && <KingInterior changePage={props.changePage} />}
            {props.currentPage == Const.CUSTOMIZEPAGE && <CustomizePage changePage={props.changePage} />}
            {props.currentPage == Const.BATTLEPAGE && <BattlePage />} 
            {props.currentPage == Const.PROFILEPAGE && <ProfilePage />}
            {props.currentPage == Const.RECOMMENDERPAGE && <RecommenderPage 
                                                                changePage={props.changePage} 
                                                                changeGenerateWorkoutFromRequest={generateWorkoutFromRequestChange}
                                                            />}
            {props.currentPage == Const.REGIMENPAGE && <RegimenPage 
                                                                generateWorkoutFromRequest={generateWorkoutFromRequestOutput}
                                                            />}
        </View>
    );
};

export default Pages;