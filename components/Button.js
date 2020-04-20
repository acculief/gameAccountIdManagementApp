import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

Button.defaultProps = {
  height: 40,
  borderRadius: 23,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#20B5B4",
};

function Button(props) {
  const ButtonContainerStyle = {
    height: props.height,
    borderRadius: props.borderRadius,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };

  const ButtonColor = {
    backgroundColor: props.disable ? "#666666" : props.backgroundColor,
  };

  const ButtonTextStyle = {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  };
  if (props.disable) {
    return (
      <View style={[ButtonContainerStyle, props.style, ButtonColor]}>
        <Text style={[ButtonTextStyle]}>{props.buttonText}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={[ButtonContainerStyle, props.style, ButtonColor]}
      onPress={props.onPress}
    >
      <Text style={[ButtonTextStyle]}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}

export default Button;
