import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { DefaultLandscape, DefWizardTower, WizardDoor, ExtWizard1, ExtWizard2, Spell, PaletteButton } from '../../constants.js';

const WizardExterior = (props) => {

	return (
		<View style={{height: '86.5%'}}>
			<DefaultLandscape height={'100%'} />
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 100}]}>
				<DefWizardTower />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 450, left: 0, right: 180, bottom: 0}]}>
				<ExtWizard1 />
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 390, left: 190, right: 0, bottom: 0}]}>
				<Spell />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 280, right: 0, bottom: 290}]}>
				<ExtWizard2 />
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 310, left: 0, right: 0, bottom: 0}]}
			onPress={() => {props.changePage(Const.WIZARDEXTERIOR, Const.WIZARDINTERIOR);}}>
                <WizardDoor />
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.WIZARDEXTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
		</View>
	)
};

export default WizardExterior;