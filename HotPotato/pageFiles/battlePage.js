import { View, StyleSheet } from "react-native";

// Local file import
import * as Styles from "../styles.js";
import FriendsList from "./battle/friendListPage.js";
import BattleHomePage from "./battle/battleHomePage.js";
import ChallengeFriend from "./battle/challengeFriend.js";

import { createStackNavigator } from "@react-navigation/stack";

const BattlePage = () => {
  const Stack = createStackNavigator();
  return (
    <View style={Styles.pageStyles.container}>
      <View style={styles.background}>
          <Stack.Navigator>
            <Stack.Screen
              name="BattleHomePage"
              component={BattleHomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendsList"
              component={FriendsList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChallengeFriend"
              component={ChallengeFriend}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "95%",
    height: "100%",
    top: -8,
  },
});

export default BattlePage;
