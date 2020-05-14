import { Ionicons } from "@expo/vector-icons";
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
import Text from "../components/BaseText";
import ListItem from "../components/ListItem";
import SubLabelText from "../components/SubLabelText";
import LabelText from "../components/LabelText";
import BorderSection from "../components/BorderSection";
import { connect } from "react-redux";

export function SelectedGameScreen(props) {
  const { navigation, route } = props;
  const [accounts, setAccounts] = useState([]);
  const [gameTitle, setGameTitle] = useState("");
  navigation.setOptions({
    title: ` ${gameTitle}`,
  });

  useEffect(() => {
    getAccountFromIds();
  }, []);

  function getAccountFromIds() {
    const { ids, gameTitle } = route.params;
    // console.log(ids);

    const foundAccounts = props.accounts
      .map((item) => {
        const foundAccount = ids
          .map((id) => {
            if (item.id === id) {
              return item;
            }
          })
          .filter((v) => v)[0];
        return foundAccount;
      })
      .filter((v) => v);
    setGameTitle(gameTitle);
    setAccounts(foundAccounts);
    console.log(foundAccounts);
  }

  const renderItem = ({ item, index }) => {
    return (
      <ListItem
        buttonText={item.accountTitle}
        onPress={() => {
          navigation.navigate("SelectedAccount", { id: item.id });
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ margin: 15 }}>
        <FlatList
          scrollEnabled={false}
          data={accounts}
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

export default connect(mapStateToProps, {})(SelectedGameScreen);
