import { Text, TouchableOpacity, View } from 'react-native';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../../firebaseCalls.js';
import { useState } from 'react';

// Local file import
import * as Const from '../../constants.js'
import * as Styles from '../../styles.js';
import { LibraryInterior, IntWizard1, IntWizard2, IntWizard3, DefWizardCarpet, Scroll, PotatoContainer, PaletteButton } from '../../constants.js';

const WizardInterior = (props) => {

    const [potatoes, setPotatoes] = useState({})

	const setup = async () => {
		let potatoes = await getPotatoes();
		setPotatoes(potatoes.data());
	}
	setup();

	return (
		<View style={{height: '86.5%'}}>
			<LibraryInterior height={'100%'} />
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 0}]}>
				<DefWizardCarpet />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 130, left: 0, right: 240, bottom: 0 }]}>
                { potatoes.wizards >= 1 ? <IntWizard1 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 0, left: 120, right: 0, bottom: 100 }]}>
                { potatoes.wizards >= 2 ? <IntWizard2 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 160, left: 230, right: 0, bottom: 0 }]}>
                { potatoes.wizards >= 3 ? <IntWizard3 /> : null }
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 20, left: 0, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <Scroll />
                </View>
                <View style={{position: 'absolute'}}>
                    <Text style={Styles.textStyles.medium}>Library</Text>
                </View>
                
			</View>
            <View style={[Styles.constantStyles.svgCenter, { top: 40, left: 300, right: 0, bottom: 550}]}>
				<View style={{position: 'absolute'}}>
                    <PotatoContainer />
                </View>
                <View style={{position: 'absolute', right: 55, bottom: 12}}>
                    <Text style={Styles.textStyles.medium}>{potatoes.wizards}</Text>
                </View>
                <View style={{position: 'absolute', right: 45, bottom: 3}}>
                    <Text style={Styles.textStyles.medium}>/</Text>
                </View>
                <View style={{position: 'absolute', right: 20, top: 20}}>
                    <Text style={Styles.textStyles.medium}>10</Text>
                </View>
			</View>
            <TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.WIZARDINTERIOR, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
		</View>
	)
};

export default WizardInterior;