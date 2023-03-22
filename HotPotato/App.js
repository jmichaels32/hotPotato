import * as Font from "expo-font";
import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { setCustomText } from "react-native-global-props";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Local file import
import Pages from "./pages.js";
import * as Styles from "./styles.js";
import * as Const from "./constants.js";
import {
  WorkoutIcon,
  FortressIcon,
  BattleIcon,
  ProfileIcon,
  WorkoutIconSelected,
  FortressIconSelected,
  BattleIconSelected,
  ProfileIconSelected,
  ActivityPlus,
  LogoLight,
  LogoDark,
  BackButton,
  AmmoIcon,
} from "./constants.js";

const TopBar = (props) => {
  const buttonStyle =
    props.state.previousPage.length != 0
      ? Styles.displayStyles.show
      : Styles.displayStyles.hide;

  const goBack = () => {
    const pageChange = props.state.previousPage.pop();

    if (props.state.previousPage.length == 0) {
      props.setState({ currentPage: pageChange, previousPage: [] });
    } else {
      props.setState({
        currentPage: pageChange,
        previousPage: props.state.previousPage,
      });
    }
  };

  return (
    <View style={Styles.appStyles.topbar}>
      <TouchableOpacity style={buttonStyle} onPress={goBack}>
        <BackButton style={buttonStyle} width={40} height={40} />
      </TouchableOpacity>
      <LogoLight height={40} />
      {props.state.currentPage == Const.WORKOUTPAGE ? (
        <TouchableOpacity
          onPress={() =>
            props.setPage(Const.WORKOUTPAGE, Const.RECOMMENDERPAGE)
          }
        >
          <ActivityPlus
            width={50}
            height={50}
            style={Styles.displayStyles.show}
          />
        </TouchableOpacity>
      ) : props.state.currentPage == Const.BATTLEPAGE ? (
        <TouchableOpacity>
          <AmmoIcon width={60} height={60} style={Styles.displayStyles.show} />
        </TouchableOpacity>
      ) : (
        <ActivityPlus
          width={50}
          height={50}
          style={Styles.displayStyles.hide}
        />
      )}
    </View>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
    this.setState = this.setState.bind(this);
  }

  state = {
    currentPage: Const.WORKOUTPAGE,
    previousPage: [],
    fontsLoaded: false,
  };

  setPage(prevPage, page) {
    // If we're dealing with a home/ origin page
    if (prevPage == null) {
      this.setState({ currentPage: page, previousPage: [] });
    } else {
      this.setState({
        currentPage: page,
        previousPage: [...this.state.previousPage, prevPage],
      });
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync({
      "Nunito-Light": require("./assets/fonts/Nunito/static/Nunito-Light.ttf"),
      "Nunito-Reg": require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
      "Nunito-Bold": require("./assets/fonts/Nunito/static/Nunito-Bold.ttf"),
      "Nunito-ExtraBold": require("./assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }
  

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <NavigationContainer>
        <View style={Styles.appStyles.container}>
          <TopBar
            state={this.state}
            setPage={this.setPage}
            setState={this.setState}
          />
          <Pages
            currentPage={this.state.currentPage}
            changePage={this.setPage}
          />
          <View style={Styles.appStyles.navbar}>
            <TouchableOpacity
              onPress={() => this.setPage(null, Const.WORKOUTPAGE)}
            >
              {this.state.currentPage == Const.WORKOUTPAGE ? (
                <WorkoutIconSelected />
              ) : (
                <WorkoutIcon />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setPage(null, Const.FORTRESSPAGE)}
            >
              {this.state.currentPage == Const.FORTRESSPAGE ? (
                <FortressIconSelected />
              ) : (
                <FortressIcon />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setPage(null, Const.BATTLEPAGE)}
            >
              {this.state.currentPage == Const.BATTLEPAGE ? (
                <BattleIconSelected />
              ) : (
                <BattleIcon />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setPage(null, Const.PROFILEPAGE)}
            >
              {this.state.currentPage == Const.PROFILEPAGE ? (
                <ProfileIconSelected />
              ) : (
                <ProfileIcon />
              )}
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
