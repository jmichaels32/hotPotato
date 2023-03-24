import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, View, StyleSheet, Image } from 'react-native';

// Local file import
import * as Styles from '../styles.js';
import * as Const from '../constants.js';
import { BackButton, Line, ProfileContentBox, SettingButton, ProfilePhoto } from '../constants.js';
import { LinearGradient } from 'expo-linear-gradient';

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

const ReportPopupInternal = ({changePopup}) => {
	return (
		<View style={Styles.popup.reportPopup}>
			<Text style={[Styles.textStyles.header, {paddingBottom: 10}]}> Submit a bug report </Text>
			<TextInput 
				style={Styles.popup.reportPopupText}
				multiline={true}
				onChangeText={() => {}}
				value={"Enter your report here"}
			/>
			<TouchableOpacity onPress={() => {}}>
				<LinearGradient colors={['#FF4545', '#FFB100']} style={Styles.pageStyles.button} >
					<Text style={Styles.textStyles.whiteSubHeader}> Submit </Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	)
}

const LogoutPopupInternal = ({changePopup}) => {
	return (
		<View style={Styles.popup.logoutPopup}>
			<Text style={Styles.textStyles.header}> Confirm log out </Text>
			<View> 
				<TouchableOpacity onPress={() => {}}>
 					<LinearGradient colors={['#FF4545', '#FFB100']} style={Styles.pageStyles.button} >
 						<Text style={Styles.textStyles.whiteSubHeader}> Yes, log out! </Text>
 					</LinearGradient>
 				</TouchableOpacity>
 				<TouchableOpacity onPress={() => {changePopup(false)}}>
 					<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
 						<Text style={Styles.textStyles.subHeader}> Go back </Text>
 					</LinearGradient>
 				</TouchableOpacity>
			</View>
		</View>	
	)
}

const Popup = ({style, changePopup, popup}) => {
 	return (
 		<View style={[Styles.recommenderStyles.popupContainer, style]}>
 			<View style={Styles.recommenderStyles.popup}>
 				{popup != "logout" && <TouchableOpacity style={Styles.popup.backButton} onPress={() => {changePopup(false)}}>
			       <BackButton width={40} height={40} />
			    </TouchableOpacity>}
 				{popup == "logout" && <LogoutPopupInternal changePopup={changePopup}/>}
 				{popup == "report" && <ReportPopupInternal changePopup={changePopup}/>}
 			</View>
 		</View>
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

const ProfilePage = () => {
	const [showPopup, changeShowPopup] = useState(false)
	const [popupType, changePopupType] = useState("")

	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<ProfileContentBox style={styles.profileBox} >
					{/* TODO: Import user photo below */}
					<ProfilePhoto style={styles.profilePhoto} path={Const.jackImagePath}/>
					<ProfileText />
				</ProfileContentBox>
				<SettingButton 
					text={"Manage Friends"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => {
						changeShowPopup(true);
					}}/>
				<SettingButton 
					text={"My Goals"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => {changeShowPopup(true)}}/>
				<SettingButton 
					text={"Report a Bug"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => {
						changeShowPopup(true);
						changePopupType("report");
					}}/>
				<SettingButton 
					text={"Log Out"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => {
						changeShowPopup(true);
						changePopupType("logout");
					}}/>
			</View>
			<Version />
			<Popup 
				style={showPopup ? {display: 'block'} : {display: 'none'}} 
				changePopup={changeShowPopup}
				popup={popupType}
			/>
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
		fontFamily: "Nunito-Reg",
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