import { Text, View, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
// Documentation for Select List can be found at:
// https://www.npmjs.com/package/react-native-dropdown-select-list

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';
import * as Exercise from '../exercises.js';
import ActivityPlus from '.././images/topbar/activityPlus.svg';

const RecommenderPage = () => {
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
				<Text style={[Styles.fonts.header, {fontSize:25}]}> Generate new workout </Text>
			</View>
			<View style={Styles.recommenderStyles.formSection}>
				<SelectList 
					boxStyles={Styles.recommenderStyles.dropdownBox}
					dropdownStyles={Styles.recommenderStyles.dropdown}
					dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
					
					inputStyles={[Styles.fonts.subHeader, Styles.recommenderStyles.dropdownBoxText]}
					dropdownTextStyles={[Styles.fonts.subHeader, {fontSize: 35}]}
					data={data}
					searchPlaceholder={'Search'}
					placeholder={'Select Activity'}
					setSelected={() => {}}
					onSelect={() => {}}
				/>
			</View>
		</View>
	)
};

export default RecommenderPage;