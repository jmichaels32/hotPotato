import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, TextInput, Text, View, StyleSheet, Image } from 'react-native';

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

const Goal = ({text}) => {
	return (
		<View style={{
			backgroundColor: '#FFF2D9', 
			marginTop: 10,
			padding: 10,
			borderRadius: 7,
			borderWidth: 2,
			borderColor: '#D6AE60',
			width: '100%',
		}}>
			<Text style={[Styles.textStyles.medium, {textAlign: 'center'}]}> {text} </Text>
		</View>
	)
}

const GoalsPopupInternal = ({changePopup}) => {
	return (
		<View style={{alignItems: 'center'}}>
			<Text style={Styles.textStyles.header}> Goals </Text>
			<Goal text="Be more consistent with my workouts"/>
			<Goal text="Be able to do 10 pull ups"/>
			<TouchableOpacity onPress={() => {}}>
				<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
					<Text style={Styles.textStyles.subHeader}> Add a goal </Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	)
}

const Friend = ({photo, name}) => {
	return (
		<View>
			<View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 20}}> 
				<ProfilePhoto style={{width: 100, height: 100}} path={photo}/>
				<View style={{alignItems:'flex-end'}}> 
					<Text style={Styles.textStyles.header}> {name} </Text>
					<TouchableOpacity onPress={() => {}}>
						<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={{borderWidth: 2, borderRadius: 5}}>
							<Text style={{fontFamily: "Nunito-Bold"}}> View Profile </Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			<Line color={'#D6AE60'} height={3} width={220} left={4}/>
		</View>
	)
}

const FriendsPopupInternal = ({changePopup}) => {
	return (
		<View style={{width: '90%', alignItems: 'center'}}>
			<Text style={Styles.textStyles.header}> Friends </Text>
			<ScrollView style={{width: '100%', height: 350}}>
				<Friend photo={Const.ashaImagePath} name={"Asha"} />
				<Friend photo={Const.daphneImagePath} name={"Daphne"} />
				<Friend photo={Const.michaelImagePath} name={"Michael"} />
				<Friend photo={Const.jackImagePath} name={"Peter"} />
				<Friend photo={Const.ashaImagePath} name={"Alice"} />
			</ScrollView>
		</View>
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
			<TouchableOpacity onPress={() => {changePopup(false)}}>
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
 				{popup == "goals" && <GoalsPopupInternal changePopup={changePopup} />}
 				{popup == "friends" && <FriendsPopupInternal changePopup={changePopup} />}
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
						changePopupType("friends");
					}}/>
				<SettingButton 
					text={"My Goals"} 
					style={styles.settingButton}
					internalStyle={styles.settingButtonInternal}
					onPress={() => {
						changeShowPopup(true);
						changePopupType("goals");
					}}/>
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