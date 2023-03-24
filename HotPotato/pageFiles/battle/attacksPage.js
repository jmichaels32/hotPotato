import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { mapPhoto } from "../../utils/photoMapper";

import { addAttacksListener } from "../../firebaseCalls";
import ExtraBackButton from "./extraBackButton";

const AttackEntry = ({ index, name, challenge }) => {
  return (
    <View style={attackStyle.row}>
      <Image style={attackStyle.pic} source={mapPhoto(name)} />
      <View style={{ flexDirection: "column" }}>
        <Text style={attackStyle.text}>
          {index}: You attacked {name} to do:
        </Text>
        <Text style={attackStyle.text}>{challenge}</Text>
      </View>
    </View>
  );
};

const attackStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    height: "30%",
  },
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    marginLeft: "2%",
    color: "black",
  },
  pic: {
    width: 25,
    height: 25,
    borderRadius: "100%",
    marginLeft: "2%"
  },
});

const AttacksPage = ({ navigation }) => {
  const [attacks, setAttacks] = useState([]);

  useEffect(() => {
    const unsubscribe = addAttacksListener(setAttacks);
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.background}>
      <ExtraBackButton navigation={navigation}/>
      <ScrollView style={styles.recentActivity}>
        <Text style={styles.recentActivityText}>Recent Attacks</Text>
        {attacks.map((data, index) => (
          <AttackEntry
            key={index}
            index={index + 1}
            name={data.player}
            challenge={data.challenge}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FDDC9B",
    width: "100%",
    height: "100%",
  },
  recentActivity: {
    // justifyContent: "space-between",
    backgroundColor: "papayawhip",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "90%",
    marginTop: "2%",
    borderColor: "#D6AE60",
    borderWidth: 3,
    borderRadius: 10,
  },
  recentActivityText: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ff6133",
  },
  column: {
    flexDirection: "column",
  },
});

export default AttacksPage;
