/*This is an Example of SearchBar in React Native*/
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import Text from "../components/BaseText";

function ListItem(props) {
  const { buttonText, style, isTop } = props;
  const onPress = () => {
    props.onPress();
  };
  return (
    <TouchableOpacity
      style={[
        style,
        {
          borderTopWidth: isTop ? 1 : 0,
          borderBottomWidth: 1,
          borderColor: "#DBDBDB",
          paddingVertical: 15,
          paddingHorizontal: 3,
          flexDirection: "row",
          alignItems: "center",
        },
      ]}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16 }}>{buttonText}</Text>
      <Image
        source={require("../assets/images/arrow_next.png")}
        style={{
          width: 11,
          height: 11,
          marginLeft: "auto",
        }}
      />
    </TouchableOpacity>
  );
}

export default ListItem;
