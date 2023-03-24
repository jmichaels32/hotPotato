import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { DefaultLandscape, DefSoldierTower2, SoldierDoor, ExtSoldier1, Target1,
        Target2, PaletteButton } from '../../constants.js';

const SoldierExterior = (props) => {

	return (
		<View style={{height: '86.5%'}}>
			<DefaultLandscape height={'100%'} />
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 100}]}>
				<DefSoldierTower2 />
			</View>
            
            <View style={[Styles.constantStyles.svgCenter, { top: 470, left: 0, right: 220, bottom: 0}]}>
				<ExtSoldier1 />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 350, left: 210, right: 0, bottom: 0}]}>
				<Target2 />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 470, left: 280, right: 0, bottom: 0}]}>
				<Target1 />
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.SOLDIEREXTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 310, left: 0, right: 0, bottom: 0}]}
			onPress={() => {props.changePage(Const.SOLDIEREXTERIOR, Const.SOLDIERINTERIOR);}}>
                <SoldierDoor />
            </TouchableOpacity>
		</View>
	)
};

export default SoldierExterior;