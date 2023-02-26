import { Component } from 'react';
import { Text, View } from 'react-native';

// Local file import
import * as Const from './constants.js';
import * as Styles from './styles.js';
import RecommenderPage from './pageFiles/recommenderPage.js';
import WorkoutPage from './pageFiles/workoutPage.js';

const Page = (props) => {
    return (
        <View style={Styles.pageStyles.container}>
            <Text> This is a {props.name} page. </Text>
        </View>
    );
};

const Pages = (props) => {
    return (
        <View>
            {props.currentPage == Const.WORKOUTPAGE && <WorkoutPage />}
            {props.currentPage == Const.FORTRESSPAGE && <Page name="fortress" />}
            {props.currentPage == Const.BATTLEPAGE && <Page name="battle" />}
            {props.currentPage == Const.PROFILEPAGE && <Page name="profile" />}
            {props.currentPage == Const.RECOMMENDERPAGE && <RecommenderPage />}
        </View>
    );
};

export default Pages;