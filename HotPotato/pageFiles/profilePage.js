import { Text, View } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Styles from '../styles.js';
import ProfileContentBox from '../constants.js'

const ProfilePage = () => {
	return (
		<View style={Styles.pageStyles.container}>
			<ProfileContentBox>
				<Text> This is some other text </Text>
			</ProfileContentBox>
		</View>
	)
};

export default ProfilePage;