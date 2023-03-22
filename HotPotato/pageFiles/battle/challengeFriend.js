import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import * as Const from "../../constants.js";

const AttackButton = () => {
  return (
    <View style={attackButtonStyle.container}>
      <Image
        style={attackButtonStyle.unionIcon}
        source={Const.unionIconPath}
      ></Image>
      <Pressable onPress={() => console.log("attack!")}>
        <View style={attackButtonStyle.row}>
          <Text style={attackButtonStyle.text}>Attack</Text>
          <Image
            style={attackButtonStyle.ammoIcon}
            source={Const.ammoIconPath}
          />
          <Text style={attackButtonStyle.text}>-2</Text>
        </View>
      </Pressable>
    </View>
  );
};

const attackButtonStyle = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: "10%",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#ff513d",
    justifyContent: "space-between",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    width: "45%",
    height: "80%",
    zIndex: 1,
    borderRadius: 10,
  },
  text: {
    fontFamily: "Nunito-Bold",
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 30,
  },
  unionIcon: {
    width: "10%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
    marginLeft: "15%",
    marginTop: "0%",
  },
  ammoIcon: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});

const ChallengeFriend = ({ navigation,route }) => {
  const name = route.params.name;
  return (
    <View style={styles.background}>
      <Button title="Back" onPress={() => navigation.pop()} />
      <View style={styles.friendBar}>
        <Text style={styles.friendName}>Select a challenge for {name}</Text>
      </View>
      <View style={styles.friendBar}>
        <Text style={styles.friendName}>Strengthen Daily Workout</Text>
      </View>
      <View style={styles.friendBar}>
        <Text style={styles.friendName}>Dare to a new workout</Text>
      </View>
      <AttackButton />
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
  friendName: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    color: "saddlebrown",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ChallengeFriend;
