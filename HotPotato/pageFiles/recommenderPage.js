import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
// Documentation for Select List can be found at:
// https://www.npmjs.com/package/react-native-dropdown-select-list
import { LinearGradient }  from 'expo-linear-gradient';

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import * as Exercise from '../exercises.js';
import ActivityPlus from '.././images/topbar/activityPlus.svg';

const RecommenderPage = () => {

	const [selected, setSelected] = React.useState("");
	const [button1, setButton1] = React.useState(false);
	const [button2, setButton2] = React.useState(false);

	const data = [
		{key:'1', value:'Running'},
		{key:'2', value:'Cycling'},
		{key:'3', value:'Swimming'},
		{key:'4', value:'Strength'},
		{key:'5', value:'Stretching'},
		{key:'6', value:'Rowing'},
		{key:'7', value:'Yoga'},
		{key:'8', value:'Pilates'},
	]

	return (
		<View style={Styles.pageStyles.container}>
			<View style={Styles.recommenderStyles.title}>
				<ActivityPlus width={50} height={50}/>
				<Text style={[Styles.textStyles.subHeader, {fontSize: 25}]}> Generate new workout </Text>
			</View>
			<View style={Styles.recommenderStyles.formSection}>
				<SelectList
					boxStyles={Styles.recommenderStyles.dropdownBox}
					dropdownStyles={Styles.recommenderStyles.dropdown}
					dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
					
					inputStyles={[Styles.textStyles.medium, Styles.recommenderStyles.dropdownBoxText]}
					dropdownTextStyles={[Styles.textStyles.medium]}
					data={data}
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
						{button1 ? 
						<LinearGradient colors={['#FF4545', '#FFB100']} style={Styles.pageStyles.button} >
							<Text style={Styles.textStyles.whiteSubHeader}>Generated Workout</Text>
						</LinearGradient>
						:
						<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
							<Text style={Styles.textStyles.subHeader}>Generated Workout</Text>
						</LinearGradient>}
					</TouchableOpacity>
					<Text style={[Styles.textStyles.regular, {textAlign: 'center', marginTop: 20}]}>Or</Text>
					<TouchableOpacity onPress={() => {setButton2(!button2); setButton1(false);}}>
						{button2 ? 
						<LinearGradient colors={['#FF4545', '#FFB100']} style={Styles.pageStyles.button} >
							<Text style={Styles.textStyles.whiteSubHeader}>Free Workout</Text>
						</LinearGradient>
						:
						<LinearGradient colors={['#FFD77D', '#FFF2D9']} style={Styles.pageStyles.button} >
							<Text style={Styles.textStyles.subHeader}>Free Workout</Text>
						</LinearGradient>}
					</TouchableOpacity>
				</View>
			}
			
		</View>
	)
};

export default RecommenderPage;