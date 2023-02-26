import { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Local file import
import * as Const from './constants.js'

const WorkoutPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentBox}>
                <Text> Example content box 1 </Text>
            </View>
            <View style={styles.contentBox}>
                <Text> Example content box 2 </Text>
            </View>
            <View style={styles.contentBox}>
                <Text> Example content box 3 </Text>
            </View>
        </View>
    )
}

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
            {props.currentPage == Const.WORKOUTPAGE && <WorkoutPage />}
            {props.currentPage == Const.FORTRESSPAGE && <Page name="fortress" />}
            {props.currentPage == Const.BATTLEPAGE && <Page name="battle" />}
            {props.currentPage == Const.PROFILEPAGE && <Page name="profile" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '90%',
        width: '96%',
        left: '2%',
        top: '2.25%',

        // To make the main page more like the figma
        //backgroundColor: '#FDDC9B',
        //borderRadius: 5,
    },
    contentBox: {
        backgroundColor: '#FDDC9B',
        borderColor: '#91743f',
        borderWidth: 3,
        borderRadius: 5,
        marginTop: 7,
        height: '20%',
        width: '95%',

        // To make the content boxes more like the figma
        //borderColor: '#D6AE60',
    }
})

export default Pages
