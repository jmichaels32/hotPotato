// ----------------------------------
// File defining constants for widespread use within the app
// ----------------------------------

// Main Pages
export const WORKOUTPAGE = 0;
export const FORTRESSPAGE = 1;
export const BATTLEPAGE = 2;
export const PROFILEPAGE = 3;

// Subpages
// Recommender pages
export const RECOMMENDERPAGE = 4;
export const REGIMENPAGE = 5;

// Profile Pages
export const WORKOUTPREFERENCESPAGE = 6;
export const MYGOALSPAGE = 7;

// ----------------------------------
// Import SVGs
// ----------------------------------

// NavBar SVGs
import WorkoutIcon from './images/icons/workoutIcon.svg'
import FortressIcon from './images/icons/fortressIcon.svg'
import BattleIcon from './images/icons/battleIcon.svg'
import ProfileIcon from './images/icons/profileIcon.svg'
import WorkoutIconSelected from './images/selectedIcons/workoutIconSelected.svg'
import FortressIconSelected from './images/selectedIcons/fortressIconSelected.svg'
import BattleIconSelected from './images/selectedIcons/battleIconSelected.svg'
import ProfileIconSelected from './images/selectedIcons/profileIconSelected.svg'

// Miscellaneous SVGs
import ActivityPlus from './images/topbar/activityPlus.svg'
import AmmoIcon from './images/topbar/ammoIcon.svg'
import LogoLight from './images/topbar/logoLight.svg'
import LogoDark from './images/topbar/logoDark.svg'
import BackButton from './images/topbar/backButton.svg'
import AttackAmmoIcon from './images/icons/attackAmmoIcon.svg'
import UncheckedBox from './images/icons/uncheckedBox.svg'
import CheckedBox from './images/icons/checkedBox.svg'
import CameraIcon from './images/icons/cameraIcon.svg'

export { WorkoutIcon, FortressIcon, BattleIcon, ProfileIcon, WorkoutIconSelected, FortressIconSelected,
				 BattleIconSelected, ProfileIconSelected, ActivityPlus, LogoLight, LogoDark, BackButton, 
				 AmmoIcon, AttackAmmoIcon, UncheckedBox, CheckedBox, CameraIcon }

// ----------------------------------
// Image Imports
// ----------------------------------

export const unionIconPath = require('./images/icons/unionIcon.png');
export const ammoIconPath = require('./images/icons/ammoIcon.png');

// Profile images
export const jackImagePath = require('./images/profilePics/jack.jpeg');
export const daphneImagePath = require('./images/profilePics/daphne.jpeg');
export const ashaImagePath = require('./images/profilePics/asha.jpeg');
export const michaelImagePath = require('./images/profilePics/michael.jpeg');

// ----------------------------------
// Component Exports
// ----------------------------------

import { Image, TouchableOpacity, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Styles from './styles.js';

// General Components
const Line = ({ color, height, width, left }) => {
  return (
    <View style={{
        borderBottomColor: color,
        borderBottomWidth: height,
        width: width,
        marginLeft: left,

        borderRadius: 10,
      }}/>
  )
}

Line.defaultProps = {
  color: '#443105',
  height: 10,
  width: 10,
  left: 0,
};

// For the profile page
const ProfileContentBox = ({ children, style }) => {
	return (
		<LinearGradient 
			colors={['#FFF2D9', '#FFE1A8']} 
			style={[Styles.constantStyles.contentBox, style]}
			start={{x : 0.5, y : 0.5}} 
			end={{x : 1, y : 1}}
		>
			{children}
		</LinearGradient>
	)
}

const SettingButton = ({ text, style, internalStyle, onPress }) => {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<LinearGradient
				colors={['#FFF2D9', '#FFE1A8']} 
				style={[Styles.constantStyles.contentBox, internalStyle]}
				start={{x : 0.5, y : 0.5}} 
				end={{x : 1, y : 1}}
			>
				<Text style={Styles.textStyles.subHeader}> {text} </Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

const ProfilePhoto = ({style, path}) => {
	return (
		<Image style={[Styles.constantStyles.profilePhoto, style]} source={path} />
	)
}

export { Line, ProfileContentBox, SettingButton, ProfilePhoto }
