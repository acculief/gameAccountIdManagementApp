import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import Text from "../components/BaseText";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import { connect } from "react-redux";
import { MonoText } from "../components/StyledText";

export function HomeScreen(props) {
  const { navigation } = props;
  const [games, setGames] = useState([]);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("NewAccount")}
        style={{ marginRight: 15 }}
      >
        <Text style={{ color: "white" }}>+</Text>
      </TouchableOpacity>
    ),
  });

  useEffect(() => {
    setGameLists();
  }, []);

  function setGameLists() {
    let gameTitleWithID = [];
    // ゲームごとにidを集めるアルゴリズム
    props.accounts.forEach((val1, key1, arr1) => {
      console.log(val1);
      if (gameTitleWithID.length == 0) {
        return gameTitleWithID.push({
          gameTitle: val1.gameTitle,
          ids: [val1.id],
        });
      }
      gameTitleWithID.find((val2) => {
        if (val1.gameTitle === val2.gameTitle) {
          return val2.ids.push(val1.id);
        } else {
          return gameTitleWithID.push({
            gameTitle: val1.gameTitle,
            ids: [val1.id],
          });
        }
      });
    });
    console.log(gameTitleWithID);
    setGames(gameTitleWithID);
  }

  const renderItem = ({ item, index }) => {
    return (
      <ListItem
        buttonText={item.gameTitle}
        onPress={() => {
          if (item.ids.length === 1) {
            navigation.navigate("SelectedAccount", { id: item.ids[0] });
          } else {
            navigation.navigate("SelectedGame", {
              gameTitle: item.gameTitle,
              ids: item.ids[0],
            });
          }
        }}
      />
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 15 }}>
        <FlatList
          scrollEnabled={false}
          data={games}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.general.accounts,
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
