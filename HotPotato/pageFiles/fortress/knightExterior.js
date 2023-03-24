import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { DefaultLandscape, DefKnightTower, KnightDoor, ExtKnight1, ExtKnight2, PaletteButton } from '../../constants.js';

const KnightExterior = (props) => {

	return (
		<View style={{height: '86.5%'}}>
			<DefaultLandscape height={'100%'} />
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 130}]}>
				<DefKnightTower />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 340, left: 0, right: 0, bottom: 0}]}>
				<KnightDoor />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 400, left: 0, right: 200, bottom: 0}]}>
				<ExtKnight1 />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 380, left: 200, right: 0, bottom: 0}]}>
				<ExtKnight2 />
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 140, left: 0, right: 0, bottom: 0}]}
			onPress={() => {props.changePage(Const.KNIGHTEXTERIOR, Const.KNIGHTINTERIOR);}}>
				<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button, {width: 100, height: 50}]} >
					<Text style={Styles.textStyles.medium}>Tavern</Text>
				</LinearGradient>
			</TouchableOpacity>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.KNIGHTEXTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
		</View>
	)
};

export default KnightExterior;