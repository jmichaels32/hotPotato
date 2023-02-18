import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

// Local file import
import * as Const from './constants.js'

const Page = (props) => {
    return (
        <View style={styles.container}>
            <Text> This is a {props.name} page. </Text>
        </View>
    );
} 

const Pages = (props) => {
    return (
        <View>
            {props.currentPage == Const.WORKOUTPAGE && <Page name="workout" />}
            {props.currentPage == Const.FORTRESSPAGE && <Page name="fortress" />}
            {props.currentPage == Const.BATTLEPAGE && <Page name="battle" />}
            {props.currentPage == Const.PROFILEPAGE && <Page name="profile" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'red',
        alignItems: 'center',
    },
})

export default Pages
