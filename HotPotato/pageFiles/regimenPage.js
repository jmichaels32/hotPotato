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

const RegimenPage = (props) => {
    const REGIMENT = props.generateWorkoutFromRequest;

    // TODO: Boolean storing if they added the extra circuit, make sure all checkboxes are marked for completion of the challenge
    //REGIMENT[REGIMENT.length-1].title === 'Extra Challenge Circuit'

    let i = 0;

    const styles = StyleSheet.create({
        item: {
            backgroundColor: '#D6AE60',
            borderRadius: 10,
            padding: 5,
            marginVertical: 4,
        },
    });
    // Count number of exercises for checkboxes
    let num_exercises = 0;
    for (let i = 0; i < REGIMENT.length; ++i){
        num_exercises += REGIMENT[i].data.length;
    }
    let num_checkboxes = 3 * num_exercises
    const [selected, setSelected] = React.useState(Array(num_checkboxes).fill(false))
    const [sum, setSum] = React.useState(0)
    const [percentage, setPercentage] = React.useState(0)

    const updateSelected = (index) => {
         let selectedCopy = [...selected];
         selectedCopy[index] = !selectedCopy[index];
         setSelected(selectedCopy);
    };

    useEffect(() => {
        // Activity point contribution
        let activitySum = 0;
        let count = 0;
        for (let i = 0; i < num_checkboxes; i++){
            if (selected[i] === true) {
                activitySum += 5;
                count += 1;
            }
        }
        setSum(activitySum);
        setPercentage(count / num_checkboxes);
    }, [selected])

    // Temporary fix for cosmetic checkbox functionality
    const Checkbox = (props) => {
    if (selected[props.index]) {
            return (
                <TouchableOpacity onPress={() => { updateSelected(props.index); }}>
                    <CheckedBox width={30} height={30} />
                </TouchableOpacity>
            )
        }
        else {
            return (

                <TouchableOpacity onPress={() => { updateSelected(props.index); }}>
                    <UncheckedBox width={30} height={30} />
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
                                    <Text> 5 pts</Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Checkbox index = {(i++)}/>
                                    <Text style={{ flexDirection: 'row', alignSelf: 'center' }}>  </Text>
                                    <Checkbox index = {(i++)}/>
                                    <Text style={{ flexDirection: 'row', alignSelf: 'center' }}>  </Text>
                                    <Checkbox index = {(i++)}/>
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
                                <Text style={Styles.textStyles.medium}>#1    #2    #3   </Text>
                            </View>
                        </LinearGradient>
                    )}

                />
            </SafeAreaView>
            <View style={[Styles.regimenStyles.sumbar, { paddingTop: 10 }]}>
                <View style={{alignContent: 'center'}}>
                <Text style={Styles.textStyles.medium}> Completed {(percentage*100).toFixed(0)}% ({sum} points) </Text>
                </View>
                <TouchableOpacity onPress={() => {props.changePage(Const.REGIMENPAGE, Const.AWARDPAGE)}}>
                    <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.acceptButton, { width: 80 }]} >
                        <Text style={Styles.textStyles.medium}> Done?</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegimenPage;