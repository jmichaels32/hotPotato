import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../firebaseCalls.js';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js'
import * as Styles from '../styles.js';
import { SoldierPotato, WizardPotato, KnightPotato, AwardBack } from '../constants.js';
import { useEffect } from 'react';
import { add } from 'mathjs';

const AwardPage = (props) => {

    const [potatoes, setPotatoes] = useState({});
    const [awards, setAwards] = useState({});
    const [display, setDisplay] = useState({})

    useEffect(() => {
        const setup = async () => {
            let potatoes = await getPotatoes();
            setPotatoes(potatoes.data());
        }
        const pickPotatoes = async () => {
            let potatoes = await getPotatoes();
            let additions = Array(3).fill(0);
            additions[0] = 0;
            additions[1] = 0;
            additions[2] = 0;
            let totals = Array(3).fill(0);
            totals[0] = potatoes.data().soldiers;
            totals[1] = potatoes.data().wizards;
            totals[2] = potatoes.data().knights;
    
            let i = 0;
            while (i < 3) {
                if (totals[0] == 10 && totals[1] == 10 && totals[2] == 10) {
                    break;
                }
                let kind = Math.floor(Math.random() * 3);
                if (totals[kind] == 10) {
                    continue;
                }
                totals[kind] += 1;
                additions[kind] += 1;
                i += 1;
            }
            await updatePotatoes({soldiers: totals[0], wizards: totals[1], knights: totals[2]});
            setAwards({soldiers: additions[0], wizards: additions[1], knights: additions[2]});

            let displays = [];
            for (let i = 0; i < additions[0]; i++) {
                displays.push('soldier');
            }
            for (let i = 0; i < additions[1]; i++) {
                displays.push('wizard');
            }
            for (let i = 0; i < additions[2]; i++) {
                displays.push('knight');
            }
            setDisplay(displays);
            
        }

        setup();
        pickPotatoes();
    },[]);

    
    

	return (
		<View style={{height: '86.5%'}}>
            <AwardBack />
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 110, bottom: 200 }]}>
                {display[0] == 'soldier' ? <SoldierPotato /> :
                display[0] == 'wizard' ? <WizardPotato /> :
                display[0] == 'knight' ? <KnightPotato /> :
                null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 150, right: 0, bottom: 100 }]}>
                {display[1] == 'soldier' ? <SoldierPotato /> :
                display[1] == 'wizard' ? <WizardPotato /> :
                display[1] == 'knight' ? <KnightPotato /> :
                null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 80, left: 0, right: 40, bottom: 0 }]}>
                {display[1] == 'soldier' ? <SoldierPotato /> :
                display[1] == 'wizard' ? <WizardPotato /> :
                display[1] == 'knight' ? <KnightPotato /> :
                null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 290, left: 0, right: 0, bottom: 0 }]}>
                {awards.soldiers != 0 ? <Text style={Styles.textStyles.medium}>Soldiers: {awards.soldiers}</Text> : null}
                {awards.wizards != 0 ? <Text style={Styles.textStyles.medium}>Wizards: {awards.wizards}</Text> : null}
                {awards.knights != 0 ? <Text style={Styles.textStyles.medium}>Knights: {awards.knights}</Text> : null}
            </View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 470, left: 0, right: 0, bottom: 0 }]}
             onPress={() => {props.changePage(null, Const.FORTRESSPAGE)}}>
                <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.acceptButton, { width: 200 }]} >
                    <Text style={Styles.textStyles.medium}> Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
	)
};

export default AwardPage;