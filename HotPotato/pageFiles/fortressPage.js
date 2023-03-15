import { Text, View } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import { Fortress, Landscape, SoldierTower, WizardTower, KnightTower } from '../constants.js';

const FortressPage = () => {
	return (
		<View style={{height: '86.5%'}}>
			<Landscape height={'100%'} />
			
			<View style={{position: 'absolute', top: 0, left: 200, right: 0, bottom: 20, justifyContent: 'center', alignItems: 'center'}}>
				<SoldierTower />
			</View>
			<View style={{position: 'absolute', top: 0, left: 0, right: 200, bottom: 60, justifyContent: 'center', alignItems: 'center'}}>
				<WizardTower />
			</View>
			<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 170, justifyContent: 'center', alignItems: 'center'}}>
				<KnightTower />
			</View>
			<View style={{position: 'absolute', top: 190, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
				<Fortress />
			</View>
		</View>
	)
};

export default FortressPage;