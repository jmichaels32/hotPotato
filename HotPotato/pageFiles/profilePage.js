import { Text, View, StyleSheet, Image } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import * as Const from '../constants.js';
import { ProfileContentBox, ProfilePhoto } from '../constants.js';

// ----------------------------------------------------------
// TODO: Import the specific photo (and account information) from the database
// ----------------------------------------------------------

// Displays the version number at the bottom of the profile page
const Version = () => {
	// TODO: Import version info here
	const versionText = "Ver 1.0.0"

	return (
		<Text style={styles.version}> {versionText} </Text>
	)
}

const ProfileText = () => {
	// TODO: Import profile information here
	const name = "Jack Michaels"
	const memberSince = "2023"
	const location = "Stanford, CA"
	const streak = "3"

	return (
		<View style={styles.profileText}>
			<Text> {name} </Text>
			<Text> Member since: {memberSince} </Text>
		</View>
	)
}

const ProfilePage = () => {
	return (
		<View style={[Styles.pageStyles.container, styles.container]}>
			<View style={styles.infoContainer}>
				<ProfileContentBox style={styles.userProfileBox} >
					{/* TODO: Import user photo here */}
					<ProfilePhoto style={styles.profilePhoto} path={Const.jackImagePath}/>
					<ProfileText />
				</ProfileContentBox>
			</View>
			<Version />
		</View>
	)
};

// Define all particular layout styles for this page here to decrease clutter in styles.js
const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
	},
	infoContainer: {
		flexGrow: 1,
	},
	userProfileBox: {
		height: '30%',
	},
	profilePhoto: {
		width: '47%',
		height: '100%',
	},
	profileText: {
		flexDirection: 'column',
	},
	version: {
		color: '#D6AE60'
	}
})

export default ProfilePage;