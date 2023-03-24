// File adapted from profilePage.js written by Jack
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { getUnlocks, getEquipped, updateEquipped, addEquipsListener } from '../../firebaseCalls.js';
import { LinearGradient } from 'expo-linear-gradient';

// Local file import
import * as Styles from '../../styles.js';
import * as Const from '../../constants.js';
import { Line, ProfileContentBox, QueenPic, FriesPic, IntKnight4, ExtSoldier1, 
        ExtWizard1, UncheckedBox, CheckedBox, MuscleStatue} from '../../constants.js';

const ProfileText = (props) => {
	return (
		<View style={styles.textRegion}>
			<Text style={styles.mainText}> {props.name} </Text>
			<Line height={3} width={100} left={4}/>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={styles.costText}> Cost: {props.cost}</Text>
                <View>
                    {
                    props.currency == "soldiers" ? <View><ExtSoldier1 width={60} height={60} /></View> :
                    props.currency == "wizards" ? <ExtWizard1 width={60} height={60} /> :
                    props.currency == "knights" ? <IntKnight4 width={60} height={60} />  :
                    null
                    } 
                </View>
                <TouchableOpacity onPress={() => { }}>
                    <LinearGradient colors={['#FFD77D', '#FFF2D9']} style={[Styles.pageStyles.button, {width: 70}]} >
                        <Text style={Styles.textStyles.medium}>Buy</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
			 
            
                 
            
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

    // useEffect(() => {
    //     const unsubscribe = addEquipsListener(setEquipped);
    //     return function cleanup() {
    //       unsubscribe();
    //     };
    //   }, []);
	

    // const equip = async (field) => {
    //     let state = !equipped[field];
    //     updateEquipped(field, state);
    //     console.log(state);
    //     equipped[field] = !equipped[field];
    //     setEquipped(equipped[field]);
    // }

    const equip = async (field) => {
        equipped[field] = !equipped[field];
        setEquipped({...equipped});
        updateEquipped(equipped);
    }

	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<ProfileContentBox style={[styles.profileBox, {height: 200}]} >
					<FriesPic width={100} height={150} />
					<View style={{flex: "column"}}>
                        <ProfileText name={"Fry Still-Life"} cost={5} currency={"knights"} />
                        <View style={{ marginLeft: 20}}>
                            <Text style={styles.costText}>Equip: { 
                                equipped.friesPic ? 
                                <TouchableOpacity onPress={() => { equip("friesPic"); }}>
                                    <CheckedBox />
                                </TouchableOpacity> : 
                                <TouchableOpacity onPress={() => { equip("friesPic"); }}>
                                    <UncheckedBox />
                                </TouchableOpacity>
                                }</Text>
                            
                        </View>
                    </View>
				</ProfileContentBox>
			</View>
            <View style={styles.infoContainer}>
				<ProfileContentBox style={[styles.profileBox, {height: 200}]} >
					<MuscleStatue width={100} height={150} />
					<View style={{flex: "column"}}>
                        <ProfileText name={"Muscle Statue"} cost={10} currency={"soldiers"} />
                        <View style={{ marginLeft: 20}}>
                            <Text style={styles.costText}>Equip: { 
                                equipped.muscleStatue ? 
                                <TouchableOpacity onPress={() => { equip("muscleStatue"); }}>
                                    <CheckedBox />
                                </TouchableOpacity> : 
                                <TouchableOpacity onPress={() => { equip("muscleStatue"); }}>
                                    <UncheckedBox />
                                </TouchableOpacity>
                                }</Text>
                            
                        </View>
                    </View>
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