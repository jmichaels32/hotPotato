import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
// Documentation for Select List can be found at:
// https://www.npmjs.com/package/react-native-dropdown-select-list
import { LinearGradient }  from 'expo-linear-gradient';

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
		<TouchableOpacity onPress={() => {}}>
			<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
				<Text style={Styles.textStyles.subHeader}>{props.text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	)
}

const RecommenderPage = () => {

	const [selected, setSelected] = React.useState("");
	const [categories, setCategories] = React.useState([]);
	const [button1, setButton1] = React.useState(false);
	const [button2, setButton2] = React.useState(false);

	const workoutList = [
		{key:'1', value:'Running'},
		{key:'2', value:'Cycling'},
		{key:'3', value:'Swimming'},
		{key:'4', value:'Strength'},
		{key:'5', value:'Stretching'},
		{key:'6', value:'Rowing'},
		{key:'7', value:'Yoga'},
		{key:'8', value:'Pilates'},
	]

	const muscleGroups = [
		{key:'1', value:'Full Body'},
		{key:'2', value:'Upper Body'},
		{key:'3', value:'Lower Body'},
		{key:'4', value:'Core'},
		{key:'5', value:'Legs'},
		{key:'6', value:'Arms'},
		{key:'7', value:'Back'},
	]

	return (
		<View style={Styles.pageStyles.container}>
			<View style={Styles.pageStyles.title}>
				<ActivityPlus width={50} height={50}/>
				<Text style={Styles.textStyles.subHeader}> Generate new workout </Text>
			</View>
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
					setSelected={(val) => {setSelected(val)}}
					// onSelect={() => {
					// 	this.setState({buttonsVisible: !this.state.buttonsVisible});
					// }}
					
				/>
			</View>
			{selected != '' && 
				<View >
					<TouchableOpacity onPress={() => {setButton1(!button1); setButton2(false);}}>
						{button1 ? <WorkoutButton selected={true} text={'Generated Workout'}/> : <WorkoutButton selected={false} text={'Generated Workout'}/>
						}
					</TouchableOpacity>
					<Text style={[Styles.textStyles.regular, {textAlign: 'center', marginTop: 20}]}>Or</Text>
					<TouchableOpacity onPress={() => {setButton2(!button2); setButton1(false);}}>
						{button2 ? <WorkoutButton selected={true} text={'Free Workout'}/> : <WorkoutButton selected={false} text={'Free Workout'}/>}
					</TouchableOpacity>
				</View>
			}
			{/* Muscle Groups */}
			{button1 || button2
			? <View style={[Styles.recommenderStyles.formSection, {zIndex: 1}]}>
				<MultipleSelectList
					boxStyles={Styles.recommenderStyles.dropdownBox}
					dropdownStyles={Styles.recommenderStyles.dropdown}
					dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
					label={"Muscle Groups"}
					labelStyles={Styles.textStyles.medium}
					inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
					dropdownTextStyles={[Styles.textStyles.medium]}
					data={muscleGroups}
					searchPlaceholder={'Search'}
					placeholder={'Muscle Groups'}
					setSelected={(val) => {setCategories(val)}}
					badgeStyles={Styles.recommenderStyles.badge}
					badgeTextStyles={Styles.textStyles.regular}
				/>
				{/* {categories.map((item) => {
					return (
						<Text>{item}</Text>
					)
				})} */}
			</View>
			: null
			}
			{/* Ready Button */}
			{button1 || button2
			? <GenerateButton text={'Ready?'} style={Styles.recommenderStyles.readyButton}/>
			: null
			}
		</View>
	)
};

export default RecommenderPage;