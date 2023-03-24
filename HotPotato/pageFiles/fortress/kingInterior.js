import { Text, TouchableOpacity, View } from 'react-native';
import { getUnlocks, getEquipped } from '../../firebaseCalls.js';
import { useState, useEffect } from 'react';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { ThroneInterior, IntGuard1, IntGuard2, IntKing, SwordStatue, WandStatue, MuscleStatue, BowStatue,
     Scroll, FriesPic, QueenPic, PaletteButton } from '../../constants.js';

const KingInterior = (props) => {

    const [unlocks, setUnlocks] = useState({});
    const [equipped, setEquipped] = useState({});

    useEffect(() => {
        const setup = async () => {
            let unlocks = await getUnlocks();
            setUnlocks(unlocks.data());
            let equipped = await getEquipped();
            setEquipped(equipped.data());
            console.log(equipped.data())
        }
        setup();
    }, []);

	return (
		<View style={{height: '86.5%'}}>
			<ThroneInterior height={'100%'} />
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 40, bottom: 80 }]}>
                <IntKing />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 500, left: 0, right: 150, bottom: 0 }]}>
                <IntGuard1 />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 475, left: 150, right: 0, bottom: 0 }]}>
                <IntGuard2 />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 300, left: 0, right: 260, bottom: 0 }]}>
                { equipped.bowStatue ? <BowStatue /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 280, left: 260, right: 0, bottom: 0 }]}>
                { equipped.swordStatue ? <SwordStatue /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 40, left: 0, right: 220, bottom: 0 }]}>
                { equipped.wandStatue ? <WandStatue /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 40, left: 210, right: 0, bottom: 0 }]}>
                { equipped.muscleStatue ? <MuscleStatue /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 150, bottom: 280 }]}>
                { equipped.friesPic ? <FriesPic /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 150, right: 0, bottom: 280 }]}>
                { equipped.queenPic ? <QueenPic /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 20, left: 0, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <Scroll />
                </View>
                <View style={{position: 'absolute'}}>
                    <Text style={Styles.textStyles.medium}>The King</Text>
                </View>
                
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.KINGINTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
            
		</View>
	)
};

export default KingInterior;