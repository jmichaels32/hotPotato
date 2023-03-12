import { Text, View, StyleSheet, Image } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import * as Const from '../constants.js';
import { ProfileContentBox, ProfilePhoto } from '../constants.js';

// ----------------------------------------------------------
// TODO: Import the specific photo (and account information) from the database
// ----------------------------------------------------------

const ProfilePage = () => {
	return (
		<View style={Styles.pageStyles.container}>
			<ProfileContentBox style={styles.userProfileBox} >
				<ProfilePhoto style={styles.profilePhoto} path={Const.jackImagePath}/>
				<Text> This is some other text </Text>
			</ProfileContentBox>
		</View>
	)
};

// Define all particular layout styles
const styles = StyleSheet.create({
	userProfileBox: {
		height: '20%',
	},
	profilePhoto: {
		width: '30%',
		height: '100%',
	}
})

export default ProfilePage;