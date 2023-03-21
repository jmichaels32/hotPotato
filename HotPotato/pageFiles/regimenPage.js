import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import { CameraIcon, CheckedBox, UncheckedBox } from "../constants.js"
import * as Exercise from '../exercises.js';
import * as Recommendation from './recommenderPage.js';
import { count, indexTransformDependencies } from 'mathjs';

/* 
'props' variable contains:
  generateWorkoutFromRequest
*/
const RegimenPage = (props) => {
    const REGIMENT = props.generateWorkoutFromRequest;
    let i = -1;
    // Count number of exercises for checkboxes
    let NUM_OF_EXERCISES = 0;
    for (let i = 0; i < REGIMENT.length; ++i){
        NUM_OF_EXERCISES += REGIMENT[i].data.length;
    }

    const [selected, setSelected] = React.useState(Array(NUM_OF_EXERCISES + 1).fill(false)) // Add 1 to array for camera
    const [sum, setSum] = React.useState(0)

    const updateSelected = (index) => {
        let selectedCopy = [...selected];
        selectedCopy[index] = !selectedCopy[index];
        setSelected(selectedCopy);
    };

    /*
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
    */

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
            <Text style={Styles.textStyles.small}> Do 3 rounds of each circuit. A round is 3-7 reps of the main exercise and 8-12 reps of the filler exercises. </Text>
            <SafeAreaView style={Styles.pageStyles.container} width={'90%'} height={'68%'}>
                <SectionList
                    sections={REGIMENT}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: '#D6AE60', borderRadius: 10, padding: 5, marginVertical: 4 }}>
                            <LinearGradient colors={['#FFF2D9', '#FFD77D']} start={{ x: .3, y: 0 }} end={{ x: 0.3, y: 1 }} style={{ padding: 5, borderRadius: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={Styles.textStyles.medium}>{item}</Text>
                                    {/* TODO: Determine point allotments?*/}
                                    <Text> 10 pts</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Checkbox index = {i+=1}/>
                                    <Text style={{ flexDirection: 'row', alignSelf: 'center' }}>  </Text>
                                    <Checkbox index = {i+=1} />
                                    <Text style={{ flexDirection: 'row', alignSelf: 'center' }}>  </Text>
                                    <Checkbox index = {i+=1} />
                                </View>

                            </LinearGradient>
                        </View>
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        // <LinearGradient colors={['#FFD77D', '#D6AE60']} start={{ x: 0.7, y: 0 }} end={{x: 0.65, y: 0.3}}>
                        <LinearGradient colors={['#FFD77D', '#D6AE60']} start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }} style={{ padding: 5, borderRadius: 10 }}>
                            <View>
                                <Text style={Styles.textStyles.subHeader}>  {title} </Text>
                            </View>
                            <View style={{alignItems: 'flex-end'}}>
                                <Text style={Styles.textStyles.medium}>Completed Rounds</Text>
                                <Text style={Styles.textStyles.medium}>#1       #2      #3    </Text>
                            </View>
                        </LinearGradient>
                    )}

                />
            </SafeAreaView>
            <View style={[Styles.regimenStyles.sumbar, { paddingTop: 10 }]}>
                <View style={{alignContent: 'center'}}>
                    <Text style={Styles.textStyles.medium}>  Take a pic! </Text>
                    <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                    <CameraIcon/>
                    <Text style={[Styles.textStyles.regular, { color: '#D6AE60' }]}> 10 pts</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.acceptButton, { width: 150 }]} >
                        <Text style={Styles.textStyles.medium}> Done? (Total: {sum})</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
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