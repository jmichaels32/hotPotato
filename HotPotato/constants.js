// ----------------------------------
// File defining constants for widespread use within the app
// ----------------------------------

export const WORKOUTPAGE = 0;
export const FORTRESSPAGE = 1;
export const BATTLEPAGE = 2;
export const PROFILEPAGE = 3;
export const RECOMMENDERPAGE = 4;

// Display constants
export const DISPLAY = true;

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
import LogoLight from './images/topbar/logoLight.svg'
import LogoDark from './images/topbar/logoDark.svg'
import BackButton from './images/topbar/backButton.svg'

export { WorkoutIcon, FortressIcon, BattleIcon, ProfileIcon, WorkoutIconSelected, FortressIconSelected,
				 BattleIconSelected, ProfileIconSelected, ActivityPlus, LogoLight, LogoDark, BackButton }

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
import { LinearGradient } from 'expo-linear-gradient';

import * as Styles from './styles.js'

const ContentBox = ({ children }) => {
	return (
		<LinearGradient 
			colors={['#FFD77D', '#FFF2D9']} 
			style={Styles.pageStyles.contentBox}
			start={{x : 0.8, y : 1}} 
			end={{x : 1, y : 0}}
		>
			{children}
		</LinearGradient>
	)
}

export default ContentBox

