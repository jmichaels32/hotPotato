import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { useState } from 'react';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { DungeonInterior, IntSoldier1, IntSoldier2, IntSoldier3, DefaultBanner, Scroll, PotatoContainer, PaletteButton } from '../../constants.js';

const SoldierInterior = (props) => {

    const [potatoes, setPotatoes] = useState({});

    const setup = async () => {
		let potatoes = await getPotatoes();
		setPotatoes(potatoes.data());
	}
	setup();

	return (
		<View style={{height: '86.5%'}}>
			<DungeonInterior height={'100%'} />
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 200, right: 0, bottom: 100}]}>
                { potatoes.soldiers >= 1 ? <IntSoldier1 /> : null }
            </View>
            <View style={[Styles.constantStyles.svgCenter, { top: 330, left: 0, right: 170, bottom: 0}]}>
                { potatoes.soldiers >= 2 ? <IntSoldier2 /> : null }
            </View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 200, bottom: 110}]}>
                { potatoes.soldiers >= 3 ? <IntSoldier3 /> : null }
            </View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 90, bottom: 380}]}>
				<DefaultBanner />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 20, left: 0, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <Scroll />
                </View>
                <View style={{position: 'absolute'}}>
                    <Text style={Styles.textStyles.medium}>Dungeon</Text>
                </View>
                
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 40, left: 300, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <PotatoContainer />
                </View>
                <View style={{position: 'absolute', right: 55, bottom: 12}}>
                    <Text style={Styles.textStyles.medium}>{potatoes.soldiers}</Text>
                </View>
                <View style={{position: 'absolute', right: 45, bottom: 3}}>
                    <Text style={Styles.textStyles.medium}>/</Text>
                </View>
                <View style={{position: 'absolute', right: 20, top: 20}}>
                    <Text style={Styles.textStyles.medium}>10</Text>
                </View>
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.SOLDIERINTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
		</View>
	)
};

export default SoldierInterior;