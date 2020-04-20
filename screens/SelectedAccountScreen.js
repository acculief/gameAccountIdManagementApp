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
import SubLabelText from "../components/SubLabelText";
import LabelText from "../components/LabelText";
import BorderSection from "../components/BorderSection";
import { connect } from "react-redux";

export function SelectedAccountScreen(props) {
  const { navigation, route, accounts } = props;
  const [account, setAccount] = useState({});

  navigation.setOptions({
    title: ` ${account.gameTitle}`,
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("NewAccount")}
        style={{ marginRight: 15 }}
      >
        <Text style={{ color: "white" }}>編集する</Text>
      </TouchableOpacity>
    ),
  });

  useEffect(() => {
    getAccountFromId();
  }, []);

  function getAccountFromId() {
    const { id } = route.params;
    console.log(accounts);
    const foundAccount = accounts.find((item) => {
      return item.id === id;
    });
    setAccount(foundAccount);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ margin: 15 }}>
        {/* <SubLabelText>ゲーム名</SubLabelText>
        <Text style={{}}>{account.gameTitle}</Text> */}
        {/* <BorderSection /> */}
        <SubLabelText>アカウント名</SubLabelText>
        <Text style={{}}>{account.accountTitle}</Text>
        <BorderSection />
        <SubLabelText>アカウント情報</SubLabelText>
        <Text style={{}}>{account.accountContext}</Text>
        <BorderSection />
        <SubLabelText>備考</SubLabelText>
        <Text style={{}}>{account.memo}</Text>
        <BorderSection />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.general.accounts,
  };
};

export default connect(mapStateToProps, {})(SelectedAccountScreen);
