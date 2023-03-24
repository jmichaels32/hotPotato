import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Pressable,
  TextInput,
  Modal,
} from "react-native";
import * as Const from "../../constants.js";
import {attackChallenge, attackStreak} from "../../firebaseCalls.js";
import ExtraBackButton from "./extraBackButton.js";


const stylesModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const AttackButton = ({ attack, modalVisible, setModalVisible }) => {
  return (
    <View style={attackButtonStyle.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text style={stylesModal.modalText}>Attacked!!</Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={stylesModal.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Image
        style={attackButtonStyle.unionIcon}
        source={Const.unionIconPath}
      ></Image>
      <Pressable onPress={() => attack()}>
        <View style={attackButtonStyle.row}>
          <Text style={attackButtonStyle.text}>Attack</Text>
          <Image
            style={attackButtonStyle.ammoIcon}
            source={Const.ammoIconPath}
          />
          <Text style={attackButtonStyle.text}></Text>
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

const ChallengeToWorkout = ({workout, setWorkout}) => {
  return (
    <View style={styles.friendBar}>
      <Text style={styles.friendName}>Challenge to new Workout</Text>
      <TextInput
        style={stylesChallenge.input}
        value={workout}
        onChangeText={setWorkout}
        multiline={true}
      />
    </View>
  );
};

const ChallengeToStreak = ({streak, setStreak}) => {
  return (
    <View style={styles.friendBar}>
      <Text style={styles.friendName}>Challenge to new streak</Text>
      <TextInput
        style={stylesChallenge.input}
        value={streak}
        onChangeText={setStreak}
        multiline={true}
        // keyboardType={"numeric"}
      />
    </View>
  );
};

const stylesChallenge = StyleSheet.create({
  input: {
    width: "94%",
    height: "60%",
    marginLeft: "3%",
    backgroundColor: "bisque",
    borderRadius: 10,
  },
});

const ChallengeFriend = ({ navigation, route }) => {

  const name = route.params.name;

  // Attack
  const [modalVisible, setModalVisible] = useState(false);
  const attack = () => {
    if(workout.length != 0)
      attackChallenge(name, workout);
    if (streak != 0) 
      attackStreak(name, streak);
    setModalVisible(true);
  };

  //Workout + streak
  const [workout, setWorkout] = useState("");
  const [streak, setStreak] = useState(0);

  return (
    <View style={styles.background}>
      <ExtraBackButton navigation = {navigation}/>
      {/* <View style={styles.friendBar}>
        <Text style={styles.friendName}>Select a challenge for {name}</Text>
      </View> */}
      <ChallengeToWorkout workout = {workout} setWorkout={setWorkout}/>
      <ChallengeToStreak streak={streak} setStreak={setStreak}/>
      <AttackButton navigation={navigation} attack = {attack} modalVisible = {modalVisible} setModalVisible={setModalVisible}/>
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
    flexDirection: "column",
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
