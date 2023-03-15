import { Text, View, StyleSheet, Image } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import * as Const from '../constants.js';
import { Line, ProfileContentBox, SettingButton, ProfilePhoto } from '../constants.js';

// ----------------------------------------------------------
// TODO: Import the specific photo (and account information) from the database
// ----------------------------------------------------------

// Displays the version number at the bottom of the profile page
const Version = () => {
	/* TODO: Import version info below */
	const versionText = "Ver 1.0.0"

	return (
		<Text style={styles.version}> {versionText} </Text>
	)
}

const ProfileText = () => {
	/* TODO: Import profile information below */
	const name = "Jack Michaels"
	const memberSince = "2023"
	const location = "Stanford, CA"
	const streak = "3"

	return (
		<View style={styles.textRegion}>
			<Text style={styles.mainText}> {name} </Text>
			<Line height={3} width={100} left={4}/>
			<Text style={styles.text}> Member since {memberSince} </Text>
			<Text style={styles.text}> {location} </Text>
			<Text style={styles.text}> {streak} day streak </Text>
		</View>
	)
}

/* 
'props' variable includes
	changePage
*/
const ProfilePage = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<ProfileContentBox style={styles.profileBox} >
					{/* TODO: Import user photo below */}
					<ProfilePhoto style={styles.profilePhoto} path={Const.jackImagePath}/>
					<ProfileText />
				</ProfileContentBox>
				<SettingButton 
					text={"My Workout Preferences"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => props.changePage(Const.PROFILEPAGE, Const.WORKOUTPREFERENCESPAGE)}/>
				<SettingButton 
					text={"My Goals"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => props.changePage(Const.PROFILEPAGE, Const.MYGOALSPAGE)}/>
				<SettingButton 
					text={"Report a Bug"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}/>
				<SettingButton 
					text={"Log Out"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}/>
			</View>
			<Version />
		</View>
	)
};

// Define all particular layout styles for this page here to decrease clutter in styles.js
const styles = StyleSheet.create({
	// General container spacing
	container: {
		...Styles.pageStyles.container,
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	infoContainer: {
		flexGrow: 1,
	},

	// Specifically the top container housing the profile photo and text
	profileBox: {
		height: '30%',
		width: '95%',
		alignSelf: 'center',
	},
	profilePhoto: {
		width: '47%',
		height: '100%',
	},
	textRegion: {
		marginLeft: 15,
		flexDirection: 'column',
	},
	mainText: {
		...Styles.textStyles.medium,
		marginBottom: 4,
	},
	text: {
		fontFamily: "Nunito",
		marginTop: 10,
	},

	// The various setting buttons on the profile page
	settingButton: {
		alignItems: 'center',
		width: '100%',
		height: '13%',
		marginTop: 7,
	},
	settingButtonInternal: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 17,
		flexGrow: 1,
	},

	// The version at the bottom of the page 
	version: {
		color: '#D6AE60',
		alignSelf: 'center',
	}
})

export default ProfilePage;