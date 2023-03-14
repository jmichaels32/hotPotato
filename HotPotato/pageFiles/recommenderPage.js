import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
// Documentation for Select List can be found at:
// https://www.npmjs.com/package/react-native-dropdown-select-list
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import * as Exercise from '../exercises.js';
import ActivityPlus from '.././images/topbar/activityPlus.svg';
import App from '../App.js';

const WorkoutButton = (props) => {
	if (props.selected) {
		return (
			<LinearGradient colors={['#FF4545', '#FFB100']} style={Styles.pageStyles.button} >
				<Text style={Styles.textStyles.whiteSubHeader}>{props.text}</Text>
			</LinearGradient>
		)
	}
	else {
		return (
			<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
				<Text style={Styles.textStyles.subHeader}>{props.text}</Text>
			</LinearGradient>
		)
	}
}

const GenerateButton = (props) => {
	return (
		<TouchableOpacity onPress={() => { }}>
			<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
				<Text style={Styles.textStyles.subHeader}>{props.text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

const RecommenderPage = (props) => {

	const [selected, setSelected] = React.useState("");
	const [activity, setActivity] = React.useState("");
	const [targetmuscles, setTargetMuscles] = React.useState([]);
	const [equipment, setEquipment] = React.useState([]);
	const [duration, setDuration] = React.useState([]);

	const [button1, setButton1] = React.useState(false);
	const [button2, setButton2] = React.useState(false);

	const workoutList = [
		{ key: 'Strength', value: 'Strength' },
		{ key: '2', value: 'Cycling' },
		{ key: '3', value: 'Swimming' },
		{ key: '4', value: 'Running' },
		{ key: '5', value: 'Stretching' },
		{ key: '6', value: 'Rowing' },
		{ key: '7', value: 'Yoga' },
		{ key: '8', value: 'Pilates' },
	]

	const equipmentList = [
		{ key: 'Band', value: 'Band' },
		{ key: 'Weights', value: 'Weights / Dumbells' },
		{ key: 'Rack', value: 'Squat Rack' },
	]

	const durationList = [
		{ key: 'Short', value: 'Short (~ 15 min)' },
		{ key: 'Medium', value: 'Medium (~ 30 min)' },
		{ key: 'Long', value: 'Long (~ 45 min)' },
	]

	const musclegroupsList = [
		{ key: 'Full Body', value: 'General Full Body' },
		{ key: 'Upper Body', value: 'General Upper Body' },
		{ key: 'Lower Body', value: 'General Lower Body' },
		{ key: 'Core', value: 'General Core' },
		{ key: 'Plyo', value: 'Plyometric' },
		{ key: 'Hamstrings', value: 'Hamstrings' },
		{ key: 'Glutes', value: 'Glutes' },
		{ key: 'Chest', value: 'Chest' },
		{ key: 'Back', value: 'Back' },
		{ key: 'Tricep', value: 'Triceps' },
		{ key: 'Hips', value: 'Hips' },
		{ key: 'Calves', value: 'Calves' },
		{ key: 'Bicep', value: 'Biceps' },
		{ key: 'Obliques', value: 'Obliques' },
		{ key: 'Shoulders', value: 'Shoulders' },
	]

	return (
		<View style={[Styles.pageStyles.container]}>
			<View style={Styles.pageStyles.title}>
				<ActivityPlus width={50} height={50} />
				<Text style={Styles.textStyles.subHeader}> Generate new workout </Text>
			</View>
			<ScrollView contentContainerStyle={Styles.pageStyles.scrollContainer} automaticallyAdjustContentInsets={false}>
			<View style={Styles.recommenderStyles.formSection}>
				<SelectList
					boxStyles={Styles.recommenderStyles.dropdownBox}
					dropdownStyles={Styles.recommenderStyles.dropdown}
					dropdownItemStyles={Styles.recommenderStyles.dropdownItems}

					inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
					dropdownTextStyles={[Styles.textStyles.medium]}
					data={workoutList}
					searchPlaceholder={'Search'}
					placeholder={'Select Activity'}
					setSelected={(val) => { setActivity(val) }}
				// onSelect={() => {
				// 	this.setState({buttonsVisible: !this.state.buttonsVisible});
				// }}

				/>
			</View>
			{activity != "Strength" &&  activity != "" &&
				<View>
					<Text style={[Styles.textStyles.regular, { textAlign: 'center', marginTop: 20 }]}>Currently, HotPotato only accomodates "Strength" workout generation, but we're hoping to add other activities soon!</Text>
				</View>
			}
			{/* Workout Duration */}
			{activity == "Strength" &&
				<View style={Styles.recommenderStyles.formSection}>
					<SelectList
						boxStyles={Styles.recommenderStyles.dropdownBox}
						dropdownStyles={Styles.recommenderStyles.dropdown}
						dropdownItemStyles={Styles.recommenderStyles.dropdownItems}

						inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
						dropdownTextStyles={[Styles.textStyles.medium]}
						data={durationList}
						searchPlaceholder={'Search'}
						placeholder={'Select Time Duration'}
						setSelected={(val) => { setDuration(val) }}
					// onSelect={() => {
					// 	this.setState({buttonsVisible: !this.state.buttonsVisible});
					// }}

					/>
				</View>
			}

			{/* Available Equipment */}
			{activity == "Strength" &&
				<View style={[Styles.recommenderStyles.formSection, { zIndex: 1 }]}>
					<MultipleSelectList
						boxStyles={Styles.recommenderStyles.dropdownBox}
						dropdownStyles={Styles.recommenderStyles.dropdown}
						dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
						label={"Available Equipment"}
						labelStyles={[Styles.textStyles.medium]}
						inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
						dropdownTextStyles={[Styles.textStyles.medium]}
						data={equipmentList}
						searchPlaceholder={'Search'}
						placeholder={'Available Equipment'}
						setSelected={(val) => { setEquipment(val) }}
						badgeStyles={Styles.recommenderStyles.badge}
						badgeTextStyles={Styles.textStyles.regular}
					/>
					{/* {categories.map((item) => {
					return (
						<Text>{item}</Text>
					)
				})} */}
				</View>
			}
			{/* Muscle Groups */}
			{activity == "Strength" &&
				<View style={[Styles.recommenderStyles.formSection, { zIndex: 1 }]}>
					<MultipleSelectList
						boxStyles={Styles.recommenderStyles.dropdownBox}
						dropdownStyles={Styles.recommenderStyles.dropdown}
						dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
						label={"Muscle Groups"}
						labelStyles={Styles.textStyles.medium}
						inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
						dropdownTextStyles={[Styles.textStyles.medium]}
						data={musclegroupsList}
						searchPlaceholder={'Search'}
						placeholder={'Target Muscle Groups (Optional)'}
						setSelected={(val) => { setTargetMuscles(val) }}
						badgeStyles={Styles.recommenderStyles.badge}
						badgeTextStyles={Styles.textStyles.regular}
					/>
					{/* {categories.map((item) => {
					return (
						<Text>{item}</Text>
					)
				})} */}
				</View>
			}
			{activity == "Strength" && duration != '' &&
				<View >
					<TouchableOpacity onPress={() => { setButton1(!button1); setButton2(false); props.changePage(Const.RECOMMENDERPAGE, Const.REGIMENPAGE);}}>
						{button1 ? <WorkoutButton selected={true} text={'Loading Workout...'} /> : <WorkoutButton selected={false} text={'Generate Workout'} />
						}
					</TouchableOpacity>
					{ // Free workout is a potential future feature
					/*
					<TouchableOpacity onPress={() => { setButton2(!button2); setButton1(false); }}>
						{button2 ? <WorkoutButton selected={true} text={'Free Workout'} /> : <WorkoutButton selected={false} text={'Free Workout'} />}
					</TouchableOpacity>
					*/}
				</View>
			} 
			<View >
				<TouchableOpacity onPress={() => { console.log(Exercise.generateWorkoutFromRequest(equipment, duration, targetmuscles));}}>
					{button1 ? <WorkoutButton selected={true} text={'Workout --> Console'} /> : <WorkoutButton selected={false} text={'Workout --> Console'} />
					}
				</TouchableOpacity>
			</View>
			</ScrollView>
		</View>
	)
};

export default RecommenderPage;