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
import Text from "../components/BaseText";
// import TextInput from "../components/TextInput";
import SubLabelText from "../components/SubLabelText";
import LabelText from "../components/LabelText";
import BorderSection from "../components/BorderSection";

export function NewAccountScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ margin: 15 }}>
        <SubLabelText>アカウント名</SubLabelText>
        <TextInput />
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
          // value={this.state.report_context}
          // onChangeText={(text) => this.setState({ report_context: text })}
        />
        <BorderSection />
        <SubLabelText>備考</SubLabelText>
        <TextInput
          style={{
            marginVertical: 15,
            textAlignVertical: "top",
          }}
          multiline={true}
          placeholder="メッセージを入力"
          underlineColorAndroid="transparent"
          // onChangeText={(text) =>
          //   this.setState({
          //     userMessage: text,
          //   })
          // }
          // value={this.state.userMessage}
        />
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

export default connect(mapStateToProps, {})(NewAccountScreen);
