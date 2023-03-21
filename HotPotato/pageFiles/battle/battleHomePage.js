import { Text, View, StyleSheet, Pressable, Image } from "react-native";

// Local file import
import * as Styles from "../../styles.js";
import * as Const from "../../constants.js";

const RecentActivityRow = () => {
  return (
    <View style={stylesActivity.row}>
      <Image style={{...stylesActivity.pic, ...stylesActivity.pic1}} source={Const.jackImagePath} />
      <Image style={{...stylesActivity.pic, ...stylesActivity.pic2}} source={Const.unionIconPath} />
      <Image style={{...stylesActivity.pic, ...stylesActivity.pic3}} source={Const.jackImagePath} />
      <Text style={stylesActivity.text}>You attacked jack!</Text>
    </View>
  );
};

const stylesActivity = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: "100%",
  },
  pic1: {
    zIndex: 2,
    marginLeft: "5%"
  },
  pic2: {
    zIndex: 1,
    marginLeft: "-6%"
  },
  pic3: {
    zIndex: 0,
    marginLeft: "-6%"
  },
  text: {
    marginTop: "auto",
    marginBottom: "auto",
  }
});

const BattleHomePage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.header}> Challenge your Friends! </Text>
      </View>
      <View style={styles.friendsContainer}>
        <Image
          style={{ ...styles.friendPic, ...styles.friendPic1 }}
          source={Const.ashaImagePath}
        />
        <Image
          style={{ ...styles.friendPic, ...styles.friendPic2 }}
          source={Const.jackImagePath}
        />
        <Image
          style={{ ...styles.friendPic, ...styles.friendPic3 }}
          source={Const.michaelImagePath}
        />
        <Image
          style={{ ...styles.unionIcon, ...styles.unionIcon1 }}
          source={Const.unionIconPath}
        />
        <Image
          style={{ ...styles.unionIcon, ...styles.unionIcon2 }}
          source={Const.unionIconPath}
        />
      </View>
      <Pressable
        style={styles.friendsList}
        onPress={() => navigation.navigate("FriendsList")}
      >
        <Text style={styles.friendsListText}>{`Friend's \nList`}</Text>
      </Pressable>
      <View style={styles.recentActivity}>
        <Text style={styles.recentActivityText}>Recent Battles</Text>
        <View style={stylesActivity.column}>
          <RecentActivityRow />
          <RecentActivityRow />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 30,
    lineHeight: 35,
  },
  background: {
    backgroundColor: "#FDDC9B",
    width: "100%",
    height: "100%",
  },
  friendsContainer: {
    height: "40%",
  },
  friendPic: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    marginLeft: 10,
    borderColor: "#725e35",
    borderWidth: 3,
  },
  friendPic1: {
    width: 150,
    height: 150,
    zIndex: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2%",
  },
  friendPic2: {
    width: 120,
    height: 120,
    zIndex: 1,
    marginLeft: "15%",
    marginTop: "-10%",
  },
  friendPic3: {
    width: 120,
    height: 120,
    zIndex: 1,
    marginLeft: "53%",
    marginTop: "-31%",
  },
  unionIcon: {
    width: "40%",
    height: "40%",
    zIndex: 0,
  },
  unionIcon1: {
    width: "20%",
    marginLeft: "20%",
    marginTop: "-50%",
  },
  unionIcon2: {
    width: "20%",
    marginLeft: "60%",
    marginTop: "-25%",
  },
  friendsList: {
    // justifyContent: "space-between",
    backgroundColor: "papayawhip",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
    height: "15%",
    borderColor: "#D6AE60",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  recentActivity: {
    // justifyContent: "space-between",
    backgroundColor: "papayawhip",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "30%",
    borderColor: "#D6AE60",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  recentActivityText: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ff6133",
  },
  friendsListText: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    color: "saddlebrown",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default BattleHomePage;
