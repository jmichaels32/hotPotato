import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";

// Local file import
import * as Styles from "../../styles.js";
import * as Const from "../../constants.js";

const AttackIcon = () => {
  return (
    <View style={styles.attack}>
      <Image style={styles.ammoIcon} source={Const.ammoIconPath}></Image>
      <Image style={styles.unionIcon} source={Const.unionIconPath}></Image>
    </View>
  );
};

const Friend = ({ name, path, navigation }) => {
  return (
    <View style={styles.friendBar}>
      <Image style={styles.friendPic} source={path} />
      <View style={styles.textCol}>
        <Text style={styles.friendName}>{name}</Text>
        <Text style={styles.subText}>2 day streak</Text>
        <Text style={styles.subText}>View Recent Activity</Text>
      </View>
      <Pressable style = {{marginLeft: "10%"}} onPress={() => navigation.navigate("ChallengeFriend", {name: name})}>
        <AttackIcon />
      </Pressable>
    </View>
  );
};

const FriendList = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Button title="Back" onPress={() => navigation.pop()} />
      <View style={Styles.pageStyles.title}>
        <Text style={Styles.textStyles.header}> Friend's List </Text>
      </View>
      {/* <Friend name={"Jack M."} path={Const.jackImagePath} navigation={navigation}></Friend> */}
      <Friend name={"Daphne"} path={Const.daphneImagePath} navigation={navigation}></Friend>
      <Friend name={"Asha"} path={Const.ashaImagePath} navigation={navigation}></Friend>
      <Friend name={"Michael"} path={Const.michaelImagePath} navigation={navigation}></Friend>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FDDC9B",
    width: "100%",
    height: "100%",
  },
  friendBar: {
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "papayawhip",
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
    height: "20%",
    borderColor: "#D6AE60",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  friendPic: {
    width: 100,
    height: 100,
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
    marginTop: "auto",
    marginBottom: "auto",
    left: "80%",
  },
  unionIcon: {
    marginLeft: "auto",
    zIndex: 1,
    position: "absolute",
  },
  attack: {
    top: 10,
    right: 20,
    color: "black",
    width: "80%",
    height: "50%",
  },
  textCol: {
    flexDirection: "column",
  },
  subText: {
    fontSize: 14,
    color: "black",
    marginLeft: 10,
  },
});

export default FriendList;
