// ----------------------------------
// File defining constants for widespread use within the app
// ----------------------------------

export const WORKOUTPAGE = 0;
export const FORTRESSPAGE = 1;
export const BATTLEPAGE = 2;
export const PROFILEPAGE = 3;
export const RECOMMENDERPAGE = 4;

// ----------------------------------
// Database for exercises 
// ----------------------------------

// JSON formatted with keys: "exercise", "equipment", "parent", "classification", "muscle1", and "muscle2".
export const EXERCISE_DATABASE = require('./exercises.json');

// ----------------------------------
// Paths for images
// ----------------------------------

// Top Bar Images
export const logoPath = require('./images/topbar/logo.png');
export const backButtonPath = require('./images/topbar/backButton.png');
export const activityPlusPath = require('./images/topbar/activityPlus.png');

// Unselected Navigation Bar Images
export const workoutIconPath = require('./images/icons/workoutIcon.png');
export const fortressIconPath = require('./images/icons/fortressIcon.png');
export const battleIconPath = require('./images/icons/battleIcon.png');
export const profileIconPath = require('./images/icons/profileIcon.png');

// Selected Navigation Bar Images
export const selectedWorkoutIconPath = require('./images/selectedIcons/selectedWorkoutIcon.png');
export const selectedFortressIconPath = require('./images/selectedIcons/selectedFortressIcon.png');
export const selectedBattleIconPath = require('./images/selectedIcons/selectedBattleIcon.png');
export const selectedProfileIconPath = require('./images/selectedIcons/selectedProfileIcon.png');
