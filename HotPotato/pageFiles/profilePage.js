import { Text, View } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Styles from '../styles.js';
import ContentBox from '../constants.js'

const ProfilePage = () => {
	return (
		<View style={Styles.pageStyles.container}>
			<ContentBox>
				<Text> This is some other text </Text>
			</ContentBox>
		</View>
	)
};

export default ProfilePage;