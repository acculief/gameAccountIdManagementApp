import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { createNewAccount } from "../actions/GeneralAction";
import { StackActions } from "@react-navigation/native";
import Text from "../components/BaseText";
// import TextInput from "../components/TextInput";
import Button from "../components/Button";
import SubLabelText from "../components/SubLabelText";
import LabelText from "../components/LabelText";
import BorderSection from "../components/BorderSection";

export function NewAccountScreen(props) {
  const [gameTitle, setGameTitle] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [accountContext, setAccountContext] = useState("");
  const [memo, setMemo] = useState("");

  async function submitData() {
    await props.createNewAccount({
      gameTitle: gameTitle,
      accountTitle: accountTitle,
      accountContext: accountContext,
      memo: memo,
      oldAccounts: props.accounts,
    });
    alert("登録が完了しました");
    props.navigation.dispatch(StackActions.popToTop());
  }

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ margin: 15 }}>
        <SubLabelText>ゲーム名</SubLabelText>
        <TextInput
          value={gameTitle}
          onChangeText={(text) => setGameTitle(text)}
        />
        <BorderSection />
        <SubLabelText>アカウント名</SubLabelText>
        <TextInput
          value={accountTitle}
          onChangeText={(text) => setAccountTitle(text)}
        />
        <BorderSection />
        <SubLabelText>アカウント情報</SubLabelText>
        <TextInput
          style={{
            paddingTop: 8,
            paddingHorizontal: 10,
            borderColor: "#DBDBDB",
            borderWidth: 1,
            borderRadius: 8,
            minHeight: 120,
            textAlignVertical: "top",
          }}
          placeholder="報告内容を入力してください"
          multiline={true}
          numberOfLines={4}
          value={accountContext}
          onChangeText={(text) => setAccountContext(text)}
        />
        <BorderSection />
        <SubLabelText>備考</SubLabelText>
        <TextInput
          style={{
            paddingTop: 8,
            paddingHorizontal: 10,
            borderColor: "#DBDBDB",
            borderWidth: 1,
            borderRadius: 8,
            minHeight: 120,
            textAlignVertical: "top",
          }}
          placeholder="報告内容を入力してください"
          multiline={true}
          numberOfLines={4}
          value={memo}
          onChangeText={(text) => setMemo(text)}
        />
        <BorderSection />
        <Button buttonText={"保存する"} onPress={() => submitData()} />
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.general.accounts,
  };
};

export default connect(mapStateToProps, { createNewAccount })(NewAccountScreen);
