import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import { CameraIcon, CheckedBox, UncheckedBox } from "../constants.js"


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
}

export default RegimenPage;