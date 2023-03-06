import { Text, View, StyleSheet, Image } from "react-native";

// Local file import
import * as Styles from "../styles.js";
import * as Const from "../constants.js";
import { AttackAmmoIcon } from "../constants.js"

const AttackIcon = () => {
	return (
		<View style={styles.attack}>
			<Image style={styles.ammoIcon} source={Const.ammoIconPath}></Image>
			<Image style={styles.unionIcon} source={Const.unionIconPath}></Image>
		</View>
	);
}

const Friend = ({name, path}) => {
  return (
    <View style={styles.friendBar}>
      <Image style={styles.friendPic} source={path} />
	    <View style={styles.textCol}>	
	  	  <Text style={styles.friendName}>{name}</Text>
		    <Text style={styles.subText}>2 day streak</Text>
		    <Text style={styles.subText}>View Recent Activity</Text>
	    </View>
	    <AttackAmmoIcon />
    </View>
  );
};

const BattlePage = () => {
  return (
    <View style={Styles.pageStyles.container}>
      <View style={styles.background}>
        <Text style={Styles.textStyles.header}> Friend's List </Text>
        <Friend name={"Jack M."} path={Const.jackImagePath}></Friend>
        <Friend name={"Daphne "} path={Const.daphneImagePath}></Friend>
        <Friend name={"Asha "} path={Const.ashaImagePath}></Friend>
        <Friend name={"Michael "} path={Const.michaelImagePath}></Friend>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FDDC9B",
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  friendBar: {
	  flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "papayawhip",
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
    height: "20%",
    borderColor: '#D6AE60',
    borderWidth: 3,
    borderRadius: 10,
	  marginBottom: 10,
  },
  friendPic: {
    width: "30%",
    height: "80%",
    borderRadius: "100%",
    marginLeft: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
  friendName: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    color: "saddlebrown",
    marginTop: 10,
    marginLeft: 10,
  },
  ammoIcon: {
    zIndex: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  unionIcon: {
    zIndex: 1,
    position: 'absolute',
  },
  attack: {
    top: 10,
    right: 20,
    "position": "absolute",
    color: "black",
    width: "20%",
    height: "50%",
  },
  textCol: {
	  flexDirection: "column",
  }, 
  subText: {
    fontSize: 14,
    color: "black",
    marginLeft: 10
  },
});

export default BattlePage;
