import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import { CameraIcon, CheckedBox, UncheckedBox } from "../constants.js"
import * as Exercise from '../exercises.js';
import * as Recommendation from './recommenderPage.js';
import { indexTransformDependencies } from 'mathjs';

const RegimenPage = () => {
    const DATA = [
        {
            "main_exercise": "Pullups",
            data: ["Pullups",'Russian Twists', 'Band Pull', 'Med Ball Slams'],
        },
        {
            "main_exercise": 'Russian Twists',
            data: ['Russian Twists', 'Band Pull', 'Med Ball Slams'],
        },
        {
            "main_exercise": 'Pushups',
            data: ['Russian Twists', 'Band Pull', 'Med Ball Slams'],
        },
        {
            "main_exercise": "Child's Pose",
            data: ['Russian Twists', 'Band Pull', 'Med Ball Slams'],
        },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 16,
        },
        item: {
            backgroundColor: '#D6AE60',
            padding: 5,
            marginVertical: 6,
        },
    });


    const regimenList = [
        { index: 0, name: 'Stretches', value: 5 },
        { index: 1, name: 'Planks', value: 10 },
        { index: 2, name: 'Rowing Machine', value: 20 },
        { index: 3, name: 'Treadmill', value: 10 },
    ];

    const [selected, setSelected] = React.useState(Array(regimenList.length + 1).fill(false))
    const [sum, setSum] = React.useState(0)

    const updateSelected = (index) => {
        let selectedCopy = [...selected];
        selectedCopy[index] = !selectedCopy[index];
        setSelected(selectedCopy);
    };

    useEffect(() => {
        // Activity point contribution
        let activitySum = regimenList.reduce(function (acc, obj) {
            if (selected[obj.index]) {
                return acc + obj.value;
            }
            else {
                return acc;
            }
        }, 0);

        // Picture point contribution 
        if (selected[regimenList.length]) {
            activitySum += 10;
        }
        setSum(activitySum);
    }, [selected])

    const Checkbox = (props) => {

        if (selected[props.index]) {
            return (
                <TouchableOpacity onPress={() => { updateSelected(props.index); }}>
                    <CheckedBox width={40} height={40} />
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => { updateSelected(props.index); }}>
                    <UncheckedBox width={40} height={40} />
                </TouchableOpacity>
            )
        }
    }

    return (

        <View style={Styles.pageStyles.container}>
            <View style={Styles.pageStyles.title}>
            <Text style={Styles.textStyles.subHeader}>Your Workout Regimen</Text>
            </View>
            <Text style={Styles.textStyles.medium}> Complete 3 rounds of each circuit. </Text>
            <Text style={Styles.textStyles.small}> For each circuit round, complete 3-7 repetitions of the main exercise and 8-12 repetitions of the filler exercises. </Text>
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <LinearGradient colors={['#FFF2D9', '#FFD77D']} start={{ x: .8, y: 0}} end={{x: 1, y: 1}}>
                            <Text style={Styles.textStyles.medium}>{item}</Text>
                            <Text>8-12 reps</Text>
                            </LinearGradient>
                        </View>


                    )}
                    renderSectionHeader={(main_exercise) => (
                        <LinearGradient colors={['#FFD77D', '#D6AE60']} start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
                        <View >
                        <Text style={Styles.textStyles.subHeader}> Circuit # {DATA.indexOf(main_exercise)}</Text>
                        <Text style={Styles.textStyles.medium}> Completed Rounds:</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{flexDirection: 'row', alignSelf: 'center'}}>    #1: </Text>
                                <Checkbox />
                                <Text style={{flexDirection: 'row', alignSelf: 'center'}}>    #2: </Text>
                                <Checkbox />
                                <Text style={{flexDirection: 'row', alignSelf: 'center'}}>    #3: </Text>
                                <Checkbox />
                            </View>
                        </View>
                        </LinearGradient>
                    )}
                />
            </SafeAreaView>

        </View>
    )
}

/* ORIGINAL DAPHNE CODE BELOW
<SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </SafeAreaView>

const RegimenPage = () => {

    const regimenList = [
        {index: 0, name: 'Stretches', value: 5},
        {index: 1, name: 'Planks', value: 10},
        {index: 2, name: 'Rowing Machine', value: 20},
        {index: 3, name: 'Treadmill', value: 10},
    ];

    const [selected, setSelected] = React.useState(Array(regimenList.length + 1).fill(false))
    const [sum, setSum] = React.useState(0)

    const updateSelected = (index) => {
        let selectedCopy = [...selected];
        selectedCopy[index] = !selectedCopy[index];
        setSelected(selectedCopy);
    };

    useEffect(() => {
        // Activity point contribution
        let activitySum = regimenList.reduce(function (acc, obj) { 
            if (selected[obj.index]) {
                return acc + obj.value;
            }
            else {
                return acc;
            }
        }, 0);

        // Picture point contribution 
        if (selected[regimenList.length]) {
            activitySum += 10;
        }
        setSum(activitySum);
    }, [selected])
    
    const Checkbox = (props) => {
    
        if (selected[props.index]) {
            return (
                <TouchableOpacity onPress={() => {updateSelected(props.index);}}>
                    <CheckedBox width={40} height={40} />
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => {updateSelected(props.index);}}>
                    <UncheckedBox width={40} height={40} />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={Styles.pageStyles.container}>
        <View style={Styles.pageStyles.title}>
            <Text style={Styles.textStyles.subHeader}>Your Regimen</Text>
        </View>
        <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.regimenStyles.container} 
            start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
            <View style={Styles.regimenStyles.workoutTitle}>
                <Text style={Styles.textStyles.subHeader}>Lifting</Text>
                <Text style={Styles.textStyles.regular}>1 hr</Text>
            </View>
            <View style={Styles.regimenStyles.checklist}>
                {regimenList.map((activity) => {
                    return (
                        <View key={activity.index} style={Styles.regimenStyles.item}>
                            <Checkbox index={activity.index} />
                            <Text style={Styles.textStyles.medium}>  {activity.name}</Text>
                            <View style={{marginLeft: 'auto', marginRight: -30}}>
                            <Text style={[Styles.textStyles.regular, {color: '#D6AE60'}]}>{activity.value} pts</Text>
                            </View>
                            
                        </View>
                    )
                })}
                <View style={Styles.regimenStyles.item}>
                    <Checkbox index={regimenList.length} />
                    <Text style={Styles.textStyles.medium}>  Take a pic! </Text>
                    <CameraIcon />
                    <View style={{marginLeft: 'auto', marginRight: -30}}>
                        <Text style={[Styles.textStyles.regular, {color: '#D6AE60'}]}>10 pts</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{marginTop: 'auto'}}>
                <View style={Styles.regimenStyles.sumbar}>
                    <View>
                        <Text style={Styles.textStyles.medium}> Total: {sum}</Text>
                    </View>
                    <TouchableOpacity>
                        <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.acceptButton, {width: 150}]} >
                            <Text style={Styles.textStyles.medium}>Finished?</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    </View>
    )
}*/

export default RegimenPage;