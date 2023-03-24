// File adapted from profilePage.js written by Jack
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { getUnlocks, getEquipped, updateEquipped } from '../../firebaseCalls.js';

// Local file import
import * as Styles from '../../styles.js';
import * as Const from '../../constants.js';
import { Line, ProfileContentBox, QueenPic, FriesPic, IntKnight4, ExtSoldier1, 
        ExtWizard1, UncheckedBox, CheckedBox} from '../../constants.js';

const ProfileText = (props) => {
	return (
		<View style={styles.textRegion}>
			<Text style={styles.mainText}> {props.name} </Text>
			<Line height={3} width={100} left={4}/>
			<Text style={styles.costText}> Cost: {props.cost} 
                <View style={{position: "absoloute", bottom: 40}}>
                    {
                    props.currency == "soldiers" ? <View><ExtSoldier1 width={60} height={60} /></View> :
                    props.currency == "wizards" ? <ExtWizard1 width={60} height={60} /> :
                    props.currency == "knights" ? <IntKnight4 width={60} height={60} />  :
                    null
                    } 
                </View> 
            </Text>
		</View>
	)
}

const CustomizePage = () => {

    // const [unlocks, setUnlocks] = useState({});
    const [equipped, setEquipped] = useState({});

    useEffect(() => {
        const setup = async () => {
            // let unlocks = await getUnlocks();
            // setUnlocks(unlocks.data());
            let equipped = await getEquipped();
            setEquipped(equipped.data());
            // console.log("setup done")
        }
        setup();
    }, []);
	

    const equip = async (field) => {
        let state = !equipped[field];
        updateEquipped(field, state);
    }

	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<ProfileContentBox style={[styles.profileBox, {height: 200}]} >
					<FriesPic width={100} height={150} />
					<ProfileText name={"Fry Still-Life"} cost={5} currency={"knights"} />
                    { equipped.friesPic ? 
                    <TouchableOpacity onPress={() => { equip("friesPic"); }}>
                        <CheckedBox />
                    </TouchableOpacity> : 
                    <TouchableOpacity onPress={() => { equip("friesPic"); }}>
                        <UncheckedBox />
                    </TouchableOpacity>
                    }
				</ProfileContentBox>
			</View>
            <View style={styles.infoContainer}>
				<ProfileContentBox style={[styles.profileBox, {height: 200}]} >
					<QueenPic width={100} height={150} />
					<ProfileText name={"Queen's Portrait"} cost={5} currency={"wizards"} />
				</ProfileContentBox>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		...Styles.pageStyles.container,
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	infoContainer: {
		flexGrow: 1,
	},
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
		marginBottom: 8,
	},
	costText: {
		...Styles.textStyles.medium,
		marginTop: 15,
	},
})

export default CustomizePage;