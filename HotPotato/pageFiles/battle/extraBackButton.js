import { Text, View, StyleSheet, Image, Button, Pressable, TouchableOpacity } from "react-native";
import {BackButton2} from "../../constants.js";

const ExtraBackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => navigation.pop()}
    >
      <BackButton2 style={styles.buttonStyle} width={40} height={40} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
      color: "D6AE60",
    },
});

export default ExtraBackButton;