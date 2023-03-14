import { Text, View } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import { Fortress } from '../constants.js';

const FortressPage = () => {
	return (
		<View style={Styles.pageStyles.container}>
			<Text> This is the fortress page </Text>
			<Fortress />
		</View>
	)
};

export default FortressPage;