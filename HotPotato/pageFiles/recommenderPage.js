import { Text, View, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
// Documentation for Select List can be found at:
// https://www.npmjs.com/package/react-native-dropdown-select-list

// Local file import
import * as Const from '../constants.js';
import * as Styles from '../styles.js';

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
				<Image style={{width: 40, height: 40}} source={Const.activityPlusPath}/>
				<Text style={[Styles.font.titleFont, {fontSize: 25}]}> Generate new workout </Text>
			</View>
			<View style={Styles.recommenderStyles.formSection}>
				<SelectList 
					boxStyles={Styles.recommenderStyles.dropdownBox}
					dropdownStyles={Styles.recommenderStyles.dropdown}
					dropdownItemStyles={Styles.recommenderStyles.dropdownItems}
					
					inputStyles={[Styles.font.titleFont, Styles.recommenderStyles.dropdownBoxText]}
					dropdownTextStyles={[Styles.font.titleFont, {fontSize: 35}]}
					data={data}
					searchPlaceholder={'Search'}
					setSelected={() => {}}
					onSelect={() => {}}
				/>
			</View>
		</View>
	)
};

export default RecommenderPage;