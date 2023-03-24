import { Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { getPotatoes, updatePotatoes, awardRandomPotatoes } from '../firebaseCalls.js';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import { DefaultFortress, DefaultLandscape, DefSoldierTower, DefWizardTower, DefKnightTower,
		SoldierPotato, WizardPotato, KnightPotato, GuardPotato, KingPotato, BrickCircle, 
		DefaultBanner, PaletteButton } from '../constants.js';

const FortressPage = (props) => {

	const [potatoes, setPotatoes] = useState({})

	const setup = async () => {
		let potatoes = await getPotatoes();
		setPotatoes(potatoes.data());
	}
	setup();

	const update = async () => {
		awardRandomPotatoes(3);
	}


	return (
		<View style={{height: '86.5%'}}>
			<DefaultLandscape height={'100%'} />
			
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 200, right: 0, bottom: 20}]}>
				<DefSoldierTower width={150} />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 200, bottom: 60}]}>
				<DefWizardTower width={150} />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 230}]}>
				<DefKnightTower width={150} />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 190, left: 0, right: 0, bottom: 0}]}>
				<DefaultFortress />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 510, left: 0, right: 0, bottom: 0}]}>
				<BrickCircle />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 400, left: 0, right: 0, bottom: 0}]}>
				<KingPotato />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 450, left: 0, right: 160, bottom: 0}]}>
				<GuardPotato />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 480, left: 0, right: 290, bottom: 0}]}>
				<WizardPotato />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 450, left: 190, right: 0, bottom: 0}]}>
				<SoldierPotato />
			</View>
			<View style={[Styles.constantStyles.svgCenter, { top: 480, left: 280, right: 0, bottom: 0}]}>
				<KnightPotato />
			</View>
			<TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 230, left: 0, right: 0, bottom: 0}]}
			onPress={() => {props.changePage(Const.FORTRESSPAGE, Const.KINGINTERIOR);}}>
				<DefaultBanner />
			</TouchableOpacity>
			
			{/* <View style={[Styles.constantStyles.svgCenter, { top: 500, left: 0, right: 0, bottom: 0}]}>
				<TouchableOpacity onPress={() => { update(3); }}>
					<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.acceptButton, { width: 160 }]} >
						<Text style={Styles.textStyles.medium}> More Taters</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View> */}
			<TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 210, right: 0, bottom: 360}]}
			onPress={() => {props.changePage(Const.FORTRESSPAGE, Const.SOLDIEREXTERIOR);}}>
				<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button, {width: 100, height: 50}]} >
					<Text style={Styles.textStyles.medium}>Soldiers</Text>
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 210, bottom: 450}]}
			onPress={() => {props.changePage(Const.FORTRESSPAGE, Const.WIZARDEXTERIOR);}}>
				<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button, {width: 100, height: 50}]} >
					<Text style={Styles.textStyles.medium}>Wizards</Text>
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 0, bottom: 550}]}
			onPress={() => {props.changePage(Const.FORTRESSPAGE, Const.KNIGHTEXTERIOR);}}>
				<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button, {width: 100, height: 50}]} >
					<Text style={Styles.textStyles.medium}>Knights</Text>
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity style={[Styles.constantStyles.svgCenter, { top: 0, left: 0, right: 290, bottom: 520}]}
			onPress={() => {props.changePage(Const.FORTRESSPAGE, Const.CUSTOMIZEPAGE);}}>
                <PaletteButton style={Styles.pageStyles.button} />
            </TouchableOpacity>
			
			{/* <Text>Soldiers: {potatoes.soldiers}, Wizards: {potatoes.wizards}, Knights: {potatoes.knights}</Text> */}
		</View>
	)
};

export default FortressPage;